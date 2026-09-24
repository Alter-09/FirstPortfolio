# Specs: streamline-ux-redundancies

## File: `app/page.tsx`

### Spec 1 — Remove `[DL]` badge from Topbar

**Target:** The header's right side div contains a `[DL]` badge element next to the language toggle.
**Action:** Remove the following DOM node entirely from the header:
```tsx
<div className="grid h-10 w-10 rotate-[4deg] place-items-center border-[3px] border-ink bg-accent-yellow text-[13px] font-extrabold text-ink">
  DL
</div>
```

---

### Spec 2 — Consolidate Navigation from 7 to 6 items

**Action:** Merge `testimonials` and `contact` into a single section `references-contact`.
- Remove `testimonials` from `navIds` array
- Replace `{ id: 'testimonials', ... }` and `{ id: 'contact', ... }` in `navItems` with:
  `{ id: 'references-contact', label: tx.nav.referencesContact, num: '06' }`
- Update `navIds` array from 7 items to 6 items

**Translation keys to add in both `es` and `en`:**
- `nav.referencesContact`: `'Referencias & Contacto'` / `'References & Contact'`

---

### Spec 3 — Refactor Hero Terminal (structured key-value format)

**Action:** Replace the terminal bio section (`$ cat perfil.txt`) with structured developer metrics:
```
$ whoami         → name
$ stack          → Full-Stack · n8n · AI
$ location       → Floridablanca, CO 🇨🇴
$ availability   → Open to work
```
Remove `tx.home.terminalBioCommand` and `tx.home.bio` display from the terminal block.

---

### Spec 4 — Differentiate Quick Snapshot Panel

**Action:** Refactor the Hero "Quick Links" card to only contain:
- `Download CV` (accent-yellow)
- `Email` (accent-teal / cream)

Remove `GitHub Profile` and `Profile Repo` buttons from the Quick Links card (they remain in Contact section).
Update the `[DL]` import from icons if `Sparkles` is unused.

---

### Spec 5 — Remove Value Proposition Quote from Sidebar Footer

**Action:** Remove the sidebar footer block (the rotated div containing `kitLabel` and `kitQuote`) from the sticky sidebar.
This content is already represented in the About section's "Value Proposition" card.

---

### Spec 6 — Merge Testimonials + Contact Sections

**Action:**
- Keep section `id="references-contact"` rendering both testimonials grid and contact CTA block
- Update `IntersectionObserver` to observe `references-contact` instead of `testimonials` and `contact`
- Merge using heading: `tx.testimonials.heading` → followed by `tx.contact.heading` CTA block
- Ensure all links in Contact section are complete (GitHub, Profile Repo, Email, Phone)

---

### Spec 7 — Translation Dictionary Updates

Add/update keys:
- `es.nav.referencesContact = 'Referencias & Contacto'`
- `en.nav.referencesContact = 'References & Contact'`
- `es.home.terminalStack` = `'Full-Stack · n8n · IA'`
- `en.home.terminalStack` = `'Full-Stack · n8n · AI'`
- `es.home.terminalAvailability` = `'Disponible para trabajar'`
- `en.home.terminalAvailability` = `'Open to work'`
- Remove `kitLabel`, `kitQuote` from sidebar usage (keys can stay in dict for other uses)
