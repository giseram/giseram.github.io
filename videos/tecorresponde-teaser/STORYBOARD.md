---
format: 1920x1080
duration: 12s
message: "TeCorresponde gestiona tus reclamos de consumo por vos, conectándote con mediadores expertos de principio a fin."
arc: Hero/hook → Cómo funciona → Qué problemas resuelve → Cierre con prueba social + marca
audience: reclutadores y clientes potenciales revisando el portfolio de UX/UI de Qubik Commerce
mode: collaborative
music: none
---

## Video direction

- **Palette system** (from `frame.md`): warm-white canvas (`#FFFFFF`) + near-black ink (`#11181C`) + muted gray body (`#71717A`) carry the two light content frames (2, and the grid headline in 3). Cobalt (`#005BC4`) is the single accent everywhere — step-circles, card borders/tints, chips. Frames 1 and 4 are the video's two sanctioned "atmosphere" frames (cover/closing per `frame.md`) and invert to the brand's dark grounds (hero video / navy `#002E62` / cobalt `#005BC4`) — never repeated on the two content frames in between.
- **Motion grammar + reveal model**: `power3` long-tail settles everywhere, no bounce. This video is silent (no VO) — every "reveal on its spoken cue" instruction instead paces reveals **on the beat**, evenly across each frame's back ~50%, never front-loaded. Only sanctioned aliveness during a hold: subtle jitter (none needed here — durations are short enough to end on the last reveal).
- **Rhythm / held-frame allocation**: Frame 1 is the video's first breather — headline and chip land early, then hold still to the cut. Frames 2–3 stay continuously revealing (stations / grid cascade) — the video's busiest stretch. Frame 4 is a deliberate two-beat hold-hold-cut (testimonial holds, hard cut, logo holds) — calm close, no motion after the logo settles.
- **Negative list**: no bouncy/overshoot easing, no lazy breathing or circular scale loops, no slow pan/push in the back half of any frame, no drop shadows (forbidden by `frame.md`), no second accent color, no browser chrome/cursors, no decorative icon sets beyond the ones named.

## Frame 1 — Hero: la promesa

- scene: Video real del hero de TeCorresponde de fondo; el título "Gestionamos tus reclamos por vos" se arma en pantalla sobre el video, con un chip de confianza (Rápido · Confiable · Online) apareciendo debajo
- voiceover: ""
- duration: 3.2s
- transition_in: crossfade
- status: animated
- src: compositions/frames/01-hero.html
- type: hook
- persuasion: Direct promise
- beat: curiosity + trust
- blueprint: compose
- focal: assets/videos/home_header_section_video-desktop.webm
- roles: hero video = background (full-bleed, dimmed by scrim)
- asset_candidates: assets/videos/home_header_section_video-desktop.webm — video real de fondo del hero del sitio, pareja revisando un reclamo en el celular

Scene 1 (0.0–0.9s): hero video plays full-bleed at full brightness — establish the real footage first. A dark diagonal scrim (left→right, strong to none) fades in to prep legibility. Layout: full-bleed, layered-depth.
Scene 2 (0.9–2.0s): headline "Gestionamos tus reclamos por vos" enters via per-word staggered reveal, smooth long-tail settle, seated lower-left third over the scrim. Layout: asymmetric 70/30 — video breathes on the right.
Scene 3 (2.0–3.2s): trust chip row (Rápido · Confiable · Online) reveals beneath the headline via per-word staggered reveal, each word landing on its own short beat; frame holds still to the cut — no further motion.

narrativeRole: Abre con la marca y la promesa central tal cual aparece en el sitio real — ancla el resto del video en la identidad visual capturada.
keyMessage: TeCorresponde gestiona tus reclamos por vos.

## Frame 2 — Cómo funciona

- scene: Los 4 pasos del proceso (numerados 1 a 4) se revelan como una franja horizontal recorrida por la cámara, cada paso con su ícono y su título corto
- voiceover: ""
- duration: 4s
- transition_in: zoom-through
- status: animated
- src: compositions/frames/02-proceso.html
- type: product_intro
- persuasion: Friction reduction
- beat: clarity
- blueprint: spatial-pan-stations (Adapt)
- focal: none
- roles: none
- asset_candidates:

Adapt: keep the single-camera station-to-station pan and the spring-pop callout per arrival; change the milestone timeline for 4 fixed numbered process steps, no hand-drawn lines.

Scene 1 (0.0–0.9s): camera opens tight on station 1 — step-circle "1" + "Contanos tu problema" card spring-pop into place at the left third. Layout: full-width strip.
Scene 2 (0.9–1.9s): camera pans right (ease-in-out) to station 2; on arrival step-circle "2" + "Un experto te contacta" spring-pops in.
Scene 3 (1.9–2.9s): camera pans to station 3; step-circle "3" + "Iniciamos la gestión" spring-pops in.
Scene 4 (2.9–4.0s): camera pans to station 4 and lands on "Obtené tu solución"; step-circle "4" pops in, then the camera pulls back slightly so all 4 stations read together as one strip — holds to the cut.

narrativeRole: Muestra que el proceso es simple y guiado en cuatro pasos concretos — reduce la fricción percibida antes de mostrar qué problemas resuelve.
keyMessage: Contanos tu problema → Un experto te contacta → Iniciamos la gestión → Obtené tu solución.

## Frame 3 — Qué problemas podés solucionar

- scene: Grilla de 6 categorías (Bancos y Tarjetas, Telefonía e Internet, Compras Online, Electrodomésticos, Servicios Públicos, Vuelos) que se auto-arma en tarjetas sobre el azul marino de la marca
- voiceover: ""
- duration: 2.6s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/03-problemas.html
- type: feature_showcase
- persuasion: Value stacking
- beat: relief
- blueprint: grid-card-assemble (Reproduce — Key_Feature grid variant)
- focal: none
- roles: none
- asset_candidates:

Scene 1 (0.0–0.9s): on the navy canvas, headline "¿Qué problemas podés solucionar?" fills in line-by-line at top; the first pair of cards (Bancos y Tarjetas, Telefonía e Internet) stagger-assemble into their grid slots — short fade + slide, ~0.08s gap between them. Layout: 3×2 grid.
Scene 2 (0.9–1.8s): the middle pair (Compras Online, Electrodomésticos) stagger-assemble into their slots, continuing the same cascade rhythm.
Scene 3 (1.8–2.6s): the final pair (Servicios Públicos, Vuelos) stagger-assemble; the completed 3×2 grid holds near-static with a slow push-in — no further motion after it lands.

narrativeRole: Amplía la promesa mostrando la variedad real de reclamos que la plataforma cubre — de bancos a vuelos.
keyMessage: Bancos, vuelos, compras online y más — todo en un mismo lugar.

## Frame 4 — Cierre: confianza + marca

- scene: Una tarjeta de testimonio breve se sostiene un instante y cede el paso al logo de TeCorresponde sobre el azul de marca
- voiceover: ""
- duration: 2.2s
- transition_in: blur-crossfade
- status: animated
- src: compositions/frames/04-cierre.html
- type: social_proof
- persuasion: Social proof
- beat: trust + confidence
- blueprint: titlecard-reveal (Reproduce — CTA card-chain variant, 2-card chain)
- focal: assets/logo-64a14425.svg
- roles: assets/logo-64a14425.svg = cutout (final card, held to the last frame)
- asset_candidates: assets/logo-64a14425.svg — isotipo TeCorresponde en blanco, para fondo de marca

Scene 1 (0.0–0.4s): static camera on the cobalt canvas; the testimonial quote fades in centered while scaling slightly (~95%→100%, smooth ease-out).
Scene 2 (0.4–1.1s): the testimonial card holds still — the deliberate breather before the hard cut, no second move.
Scene 3 (1.1s, instant): a hard cut at full opacity — no crossfade — swaps the testimonial for the TeCorresponde logo lockup, centered.
Scene 4 (1.1–2.2s): the logo lockup spring-settles (one restrained soft settle, not a chain) and holds static to the final frame — the video's last image.

narrativeRole: Cierra con prueba social real (testimonio del sitio) y el logo, dejando la marca como último frame — el gancho de cierre del caso de portfolio.
keyMessage: Gente real ya resolvió su reclamo con TeCorresponde.

testimonialText: "La rapidez y el seguimiento en tiempo real hicieron toda la diferencia." — Paula M.
