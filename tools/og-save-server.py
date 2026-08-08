"""Serve the repo, and accept the rendered OG card back from the browser.

tools/og-card.html draws assets/img/og.png on a canvas; a canvas can only hand
those bytes back over the network, so this adds one POST route to an otherwise
ordinary static server. Loopback only, one fixed target path, no traversal.

    python tools/og-save-server.py
    # then open http://127.0.0.1:4892/tools/og-card.html and press the button

Nothing on the site depends on this file — it exists so the card can be redrawn
after a token, portrait or wording change.
"""
import http.server
import os
import socketserver

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET = os.path.join(ROOT, "assets", "img", "og.png")
PORT = 4892


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def do_POST(self):
        if self.path != "/_save":
            self.send_error(404)
            return
        data = self.rfile.read(int(self.headers.get("Content-Length", 0)))
        with open(TARGET, "wb") as fh:
            fh.write(data)
        # A canvas always exports RGBA. Nothing on the card is transparent, and
        # some scrapers handle an alpha channel badly, so drop it if Pillow is
        # around — this also takes the file from ~116KB to ~93KB.
        try:
            from PIL import Image

            Image.open(TARGET).convert("RGB").save(TARGET, "PNG", optimize=True)
        except ImportError:
            pass
        self.send_response(200)
        self.send_header("Content-Type", "text/plain")
        self.end_headers()
        self.wfile.write(f"wrote {len(data)} bytes to {TARGET}".encode())

    def log_message(self, fmt, *args):
        pass


if __name__ == "__main__":
    with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as srv:
        print(f"serving {ROOT} on http://127.0.0.1:{PORT} — POST /_save -> {TARGET}")
        srv.serve_forever()
