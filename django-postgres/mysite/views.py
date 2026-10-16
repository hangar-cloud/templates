import django
from django.db import connection
from django.http import HttpResponse, JsonResponse

PAGE = """<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hello from Hangar</title>
    <style>
      body {{ margin: 0; min-height: 100vh; display: grid; place-items: center; background: #12100e; color: #f5f2eb; font-family: system-ui, sans-serif; }}
      main {{ padding: 24px; text-align: center; }}
      h1 {{ margin: 0 0 12px; font-size: 2.25rem; }}
      p {{ margin: 6px 0; color: #a39e95; }}
      a {{ color: #ff6a1a; }}
    </style>
  </head>
  <body>
    <main>
      <h1>Hello from Hangar</h1>
      <p>This Django {version} app is live.</p>
      <p>Database: {database}</p>
      <p>Edit <code>mysite/views.py</code> in your fork of
        <a href="https://github.com/hangar-cloud/templates">the starter</a> to make it yours.</p>
    </main>
  </body>
</html>"""


def database_status():
    if connection.vendor != "postgresql":
        return "SQLite in the container. Add a PostgreSQL database and set DATABASE_URL to use it."
    try:
        with connection.cursor() as cursor:
            cursor.execute("SHOW server_version")
            (version,) = cursor.fetchone()
        return f"connected to PostgreSQL {version}."
    except Exception:
        return "PostgreSQL is set but not reachable. Check DATABASE_URL."


def home(request):
    return HttpResponse(
        PAGE.format(version=django.get_version(), database=database_status())
    )


def health(request):
    return JsonResponse({"status": "ok"})
