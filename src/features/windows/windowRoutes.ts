export type AppView = "main" | "notepad" | "tile";

export interface AppRoute {
  view: AppView;
  noteId?: string;
  mode?: string;
}

export function getInitialRoute(url: URL = new URL(window.location.href)): AppRoute {
  return routeFromSearch(url.search);
}

export function routeFromSearch(search: string): AppRoute {
  const params = new URLSearchParams(search);
  const view = params.get("view");
  const noteId = params.get("noteId") ?? undefined;
  const mode = params.get("mode") ?? undefined;

  if (view === "notepad") return { view, noteId, mode };
  if (view === "tile") return { view, noteId, mode };
  return { view: "main" };
}

export function buildNotepadUrl(noteId?: string): string {
  return buildUrl("notepad", noteId);
}

export function buildTileUrl(noteId: string): string {
  return buildUrl("tile", noteId);
}

function buildUrl(view: AppView, noteId?: string): string {
  const params = new URLSearchParams({ view });
  if (noteId) params.set("noteId", noteId);
  return `index.html?${params.toString()}`;
}
