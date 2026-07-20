// CSS injected INTO the HubSpot form iframe (same-origin) to skin the quote
// form. HubSpot renders new-editor forms inside an isolated iframe with its own
// <style> blocks, so parent-page CSS can't reach them and our rules must be
// injected into the iframe's own <head>. HubSpot's baseline styles use high
// specificity / !important, so the properties we override carry !important.
//
// Brand tokens are redefined here because the iframe document doesn't inherit
// the parent page's :root variables.

export const SKIN_FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700&family=Lora:ital,wght@0,500;1,400;1,500&display=swap'

export const SKIN_CSS = `
:root{
  --lm-primary:#8E2D0A;--lm-primary-600:#7A2608;--lm-primary-700:#5E1C05;--lm-primary-900:#3D1303;
  --lm-secondary:#E28413;--lm-secondary-soft:#F2A94B;--lm-accent:#C0612A;
  --lm-cream:#FBF7F1;--lm-cream-deep:#F2E9DD;--lm-white:#fff;
  --lm-ink:#2C2A28;--lm-ink-muted:#6E665E;--lm-line:#E8DECF;
  --font-head:'Poppins',system-ui,sans-serif;--font-body:'Montserrat',system-ui,sans-serif;--font-serif:'Lora',Georgia,serif;
  --lm-ease:cubic-bezier(0.16,1,0.3,1);--lm-focus:rgba(142,45,10,.18);--lm-err:#A3320F;--lm-err-bg:#FBEDE7;
}
html.lm-hsform,html.lm-hsform body{background:transparent!important;}
.lm-hsform .hs-form{font-family:var(--font-body)!important;}
.lm-hsform *,.lm-hsform *::before,.lm-hsform *::after{box-sizing:border-box;}

/* fieldset reset (kills native border/padding + HubSpot max-width) */
.lm-hsform fieldset{max-width:none!important;border:0!important;margin:0!important;padding:0!important;min-inline-size:0!important;}
.lm-hsform .hs-form fieldset+fieldset{margin-top:20px!important;}
.lm-hsform .hs-form-field{margin:0!important;}

/* hide the duplicate <h1> that repeats the page's own heading */
.lm-hsform .hs-richtext:has(h1){display:none!important;}
.lm-hsform legend.hs-field-desc{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important;}

/* section dividers (injected) */
.lm-hsform .lm-hs-divider{margin:34px 0 18px!important;}
.lm-hsform .lm-hs-divider:first-child{margin-top:0!important;}
.lm-hsform .lm-hs-divider-eyebrow{display:block!important;font-family:var(--font-head)!important;font-size:11px!important;font-weight:700!important;letter-spacing:1.6px!important;text-transform:uppercase!important;color:var(--lm-secondary)!important;margin-bottom:5px!important;}
.lm-hsform .lm-hs-divider-title{font-family:var(--font-serif)!important;font-style:italic!important;font-weight:500!important;font-size:19px!important;line-height:1.3!important;color:var(--lm-primary-900)!important;margin:0 0 12px!important;}
.lm-hsform .lm-hs-divider-rule{height:1px!important;background:var(--lm-line)!important;}

/* labels */
.lm-hsform .hs-form-field>label{display:block!important;font-family:var(--font-head)!important;font-weight:600!important;font-size:13.5px!important;line-height:1.35!important;color:var(--lm-ink)!important;margin-bottom:7px!important;letter-spacing:.15px!important;text-transform:none!important;}
.lm-hsform .hs-form-field.hs-error>label{color:var(--lm-err)!important;}
.lm-hsform .hs-form-required{color:var(--lm-secondary)!important;font-weight:700!important;margin-left:3px!important;}

/* controls */
.lm-hsform input.hs-input,.lm-hsform select.hs-input,.lm-hsform textarea.hs-input{
  width:100%!important;display:block!important;font-family:var(--font-body)!important;font-size:15px!important;line-height:1.4!important;
  color:var(--lm-ink)!important;background:var(--lm-cream)!important;border:1.5px solid var(--lm-line)!important;border-radius:10px!important;
  padding:12px 14px!important;min-height:46px!important;box-shadow:none!important;-webkit-appearance:none!important;appearance:none!important;
  transition:border-color .2s ease,box-shadow .2s ease,background-color .2s ease!important;
}
.lm-hsform input.hs-input::placeholder,.lm-hsform textarea.hs-input::placeholder{color:var(--lm-ink-muted)!important;opacity:.8!important;}
.lm-hsform input.hs-input:hover:not(:focus),.lm-hsform select.hs-input:hover:not(:focus),.lm-hsform textarea.hs-input:hover:not(:focus){border-color:var(--lm-accent)!important;}
.lm-hsform input.hs-input:focus,.lm-hsform select.hs-input:focus,.lm-hsform textarea.hs-input:focus{outline:none!important;background:var(--lm-white)!important;border-color:var(--lm-primary)!important;box-shadow:0 0 0 4px var(--lm-focus)!important;}
.lm-hsform textarea.hs-input{min-height:140px!important;resize:vertical!important;line-height:1.6!important;}

/* select chevron */
.lm-hsform select.hs-input{padding-right:40px!important;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5.5 7.5L10 12l4.5-4.5' stroke='%238E2D0A' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")!important;background-repeat:no-repeat!important;background-position:right 14px center!important;background-size:18px!important;}
.lm-hsform select.hs-input::-ms-expand{display:none;}

/* date field */
.lm-hsform input.hs-input.hs-fieldtype-date,.lm-hsform input.hs-input.hs-dateinput{padding-right:42px!important;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'%3E%3Crect x='3.5' y='5' width='17' height='15' rx='2.5' stroke='%238E2D0A' stroke-width='1.6'/%3E%3Cpath d='M3.5 9.5h17' stroke='%238E2D0A' stroke-width='1.6'/%3E%3Cpath d='M8 3v3.2M16 3v3.2' stroke='%238E2D0A' stroke-width='1.6' stroke-linecap='round'/%3E%3C/svg%3E")!important;background-repeat:no-repeat!important;background-position:right 13px center!important;background-size:18px!important;}
.lm-hsform .pika-single{font-family:var(--font-body)!important;border:1px solid var(--lm-line)!important;border-radius:14px!important;box-shadow:0 18px 48px -20px rgba(60,22,8,.28)!important;background:var(--lm-white)!important;padding:10px!important;}
.lm-hsform .pika-label{font-family:var(--font-head)!important;font-weight:700!important;color:var(--lm-primary-900)!important;background:var(--lm-cream)!important;}
.lm-hsform .pika-button{border-radius:8px!important;font-family:var(--font-body)!important;color:var(--lm-ink)!important;}
.lm-hsform .pika-button:hover{background:var(--lm-cream-deep)!important;color:var(--lm-primary-900)!important;box-shadow:none!important;}
.lm-hsform .is-selected .pika-button{background:var(--lm-primary)!important;color:#fff!important;box-shadow:none!important;}

/* file upload */
.lm-hsform .hs-fieldtype-file .input{border:1.5px dashed var(--lm-line)!important;border-radius:10px!important;background:var(--lm-cream-deep)!important;padding:14px!important;transition:border-color .2s ease,background-color .2s ease!important;}
.lm-hsform .hs-fieldtype-file .input:hover,.lm-hsform .hs-fieldtype-file .input:focus-within{border-color:var(--lm-primary)!important;background:var(--lm-cream)!important;}
.lm-hsform input[type="file"].hs-input{width:100%!important;min-height:0!important;border:0!important;background:transparent!important;padding:2px!important;font-size:13.5px!important;color:var(--lm-ink-muted)!important;}
.lm-hsform input[type="file"].hs-input::file-selector-button{font-family:var(--font-head)!important;font-weight:700!important;font-size:13px!important;color:#fff!important;background:var(--lm-primary)!important;border:0!important;border-radius:999px!important;padding:9px 18px!important;margin-right:12px!important;cursor:pointer;transition:background-color .2s ease!important;}
.lm-hsform input[type="file"].hs-input:hover::file-selector-button{background:var(--lm-primary-700)!important;}

/* checkbox / radio (defensive) */
.lm-hsform .hs-input[type="checkbox"],.lm-hsform .hs-input[type="radio"]{width:18px!important;height:18px!important;min-height:0!important;margin:2px 10px 0 0!important;accent-color:var(--lm-primary)!important;}
.lm-hsform ul.inputs-list{list-style:none!important;margin:4px 0 0!important;padding:0!important;}
.lm-hsform .hs-form-booleancheckbox-display,.lm-hsform .hs-form-radio-display{font-weight:400!important;font-size:14px!important;color:var(--lm-ink)!important;}

/* ---- Compact 2-column form layout ----
   The 24-field form is a tall single column by default. Lay the whole form out
   as a 2-column grid so single fields pair up (halving perceived length), while
   name/email pairs, the section dividers, the notes textarea, the file upload
   and the submit button each span the full width. */
html.lm-hsform form.hs-form{display:grid!important;grid-template-columns:1fr 1fr!important;column-gap:18px!important;row-gap:15px!important;align-items:start!important;}
html.lm-hsform form.hs-form>fieldset.form-columns-1{grid-column:span 1!important;margin:0!important;}
html.lm-hsform form.hs-form>fieldset.form-columns-2,
html.lm-hsform form.hs-form>fieldset.form-columns-3,
html.lm-hsform form.hs-form>fieldset.form-columns-0,
html.lm-hsform form.hs-form>.lm-hs-divider,
html.lm-hsform form.hs-form>.hs_submit,
html.lm-hsform form.hs-form>.hs-submit,
html.lm-hsform form.hs-form>fieldset.form-columns-1:has(.hs-fieldtype-textarea),
html.lm-hsform form.hs-form>fieldset.form-columns-1:has(.hs-fieldtype-file){grid-column:1 / -1!important;margin:0!important;}
html.lm-hsform form.hs-form>.lm-hs-divider{margin:16px 0 2px!important;}
html.lm-hsform form.hs-form>.lm-hs-divider:first-child{margin-top:0!important;}

/* internal grid for the already-paired (name/email) + any 3-col rows */
.lm-hsform fieldset.form-columns-2{display:grid!important;grid-template-columns:1fr 1fr!important;column-gap:18px!important;}
.lm-hsform fieldset.form-columns-3{display:grid!important;grid-template-columns:1fr 1fr 1fr!important;column-gap:18px!important;}
.lm-hsform fieldset.form-columns-2>.hs-form-field,.lm-hsform fieldset.form-columns-3>.hs-form-field{width:100%!important;float:none!important;padding:0!important;}

/* single column on narrow screens */
@media (max-width:640px){
  html.lm-hsform form.hs-form{grid-template-columns:1fr!important;row-gap:16px!important;}
  .lm-hsform fieldset.form-columns-2,.lm-hsform fieldset.form-columns-3{grid-template-columns:1fr!important;row-gap:16px!important;}
}

/* errors */
.lm-hsform .hs-form-field.hs-error input.hs-input,.lm-hsform .hs-form-field.hs-error select.hs-input,.lm-hsform .hs-form-field.hs-error textarea.hs-input{border-color:var(--lm-err)!important;background:var(--lm-err-bg)!important;}
.lm-hsform .hs-error-msgs{list-style:none!important;margin:6px 0 0!important;padding:0!important;}
.lm-hsform .hs-error-msg,.lm-hsform .hs-error-msgs label{color:var(--lm-err)!important;font-size:12.5px!important;font-weight:600!important;}
.lm-hsform .hs_error_rollup .hs-error-msgs{background:var(--lm-err-bg)!important;border:1px solid rgba(163,50,15,.25)!important;border-left:3px solid var(--lm-err)!important;border-radius:10px!important;padding:13px 15px!important;}

/* legal / helper copy */
.lm-hsform .legal-consent-container,.lm-hsform .hs-richtext:not(:has(h1)){font-size:12.5px!important;color:var(--lm-ink-muted)!important;line-height:1.6!important;}
.lm-hsform .legal-consent-container a,.lm-hsform .hs-richtext a{color:var(--lm-primary)!important;text-decoration:underline!important;}

/* submit */
.lm-hsform .hs-submit{margin-top:28px!important;}
.lm-hsform .hs-submit .actions{display:flex!important;padding:0!important;}
.lm-hsform input.hs-button.primary{width:auto!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:50px!important;font-family:var(--font-head)!important;font-size:15.5px!important;font-weight:700!important;letter-spacing:.3px!important;color:#fff!important;background:var(--lm-primary)!important;border:0!important;border-radius:999px!important;padding:15px 36px!important;cursor:pointer;text-transform:none!important;box-shadow:0 14px 30px -12px rgba(142,45,10,.5)!important;transition:background .3s ease,transform .3s var(--lm-ease),box-shadow .3s var(--lm-ease)!important;}
.lm-hsform input.hs-button.primary:hover{background:var(--lm-primary-700)!important;transform:translateY(-2px)!important;box-shadow:0 40px 90px -32px rgba(45,15,4,.42)!important;}
.lm-hsform input.hs-button.primary:active{transform:translateY(0)!important;}
.lm-hsform input.hs-button.primary.lm-hs-loading{opacity:.7!important;cursor:progress!important;transform:none!important;box-shadow:none!important;}
.lm-hsform .submitted-message{font-family:var(--font-body)!important;font-size:16px!important;color:var(--lm-ink)!important;line-height:1.7!important;}

@media (max-width:480px){
  .lm-hsform input.hs-input,.lm-hsform select.hs-input,.lm-hsform textarea.hs-input{font-size:16px!important;}
  .lm-hsform input.hs-button.primary{width:100%!important;}
  .lm-hsform .hs-submit .actions{width:100%!important;}
}
@media (prefers-reduced-motion:reduce){
  .lm-hsform input.hs-input,.lm-hsform select.hs-input,.lm-hsform textarea.hs-input,.lm-hsform input.hs-button.primary{transition:none!important;}
}
`
