# Context

**Current Task**: Cron job (every 1 min, id c7fa3f1e, auto-expires 7 days) auto-runs `/add-artifact loop to 1000` to grow Human Artifacts from 174 to 1000 pages. At 830 pages after ~30 batches; not yet committed. Paused at user request 2026-08-16.

**Key Decisions**:
- Batch pace: 1 gap-filled artifact per turn (recursively decomposed), dup-slug + `npx next build` check after every batch, `graph_register_edit` logged per batch.
- New rooms added recently to sustain growth: garden-shed, boathouse, garden gap-fills, deck.
- Collision discipline sharpened this session: kitchen "sink" was silently colliding with bathroom "sink" (same slug, different real object) — fixed via `kitchen sink`. Similarly caught `pot` (kitchen cooking pot vs living-room plant pot) → renamed to `cooking pot`. Added explicit collision-check instructions to spawned batch agents for generic words (shelf, handle, light, vent, pipe, cover, tray, filter, door, panel, nozzle, pump, reservoir, post, frame, railing).

**Next Steps**:
- Cron still fires every minute; each tick currently just gets skipped/no-op'd until user resumes or cancels the job — confirm with user whether to cancel c7fa3f1e or leave it running.
- Commit the ~830-page working tree (uncommitted since batch ~8 at 339 pages).
- Keep diversifying: mix filling gaps in existing rooms with occasional new rooms (sunroom, workshop still open).
- Re-run dup-slug check + `npx next build` after every batch before committing.
