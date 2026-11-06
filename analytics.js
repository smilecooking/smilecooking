/* Production only. Review/local traffic never enters the existing GA4 property. */
(() => {
  'use strict';
  const cfg = window.SMILE_SITE_CONFIG || {};
  const allowedHosts = ['smilecooking.jp', 'www.smilecooking.jp'];
  if (!cfg.analyticsEnabled || !allowedHosts.includes(location.hostname) || window.self !== window.top) return;
  if (!/^G-[A-Z0-9]+$/.test(cfg.ga4MeasurementId || '') || window.__smileAnalyticsStarted) return;
  if (window['ga-disable-' + cfg.ga4MeasurementId]) return;
  window.__smileAnalyticsStarted = true;
  // Keep standard campaign attribution, never forward arbitrary form/query values.
  const pageURL = new URL(location.origin + location.pathname);
  const incoming = new URLSearchParams(location.search);
  for (const key of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','gbraid','wbraid']) {
    const value = incoming.get(key);
    if (value && /^[A-Za-z0-9_.~-]{1,150}$/.test(value)) pageURL.searchParams.set(key, value);
  }
  let referrer = '';
  try { if (document.referrer) { const url = new URL(document.referrer); referrer = url.origin + url.pathname; } } catch (_) {}
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', cfg.ga4MeasurementId, {
    send_page_view: false, page_location: pageURL.href, page_referrer: referrer,
    allow_google_signals: false, allow_ad_personalization_signals: false
  });
  const common = { page_location: pageURL.href, page_referrer: referrer };
  const send = (name, values = {}) => window.gtag('event', name, { ...common, ...values });
  send('page_view', { page_title: document.title });
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(cfg.ga4MeasurementId);
  document.head.appendChild(script);
  const lessonOf = path => ({ '/lessons/oyako/':'oyako', '/lessons/shogakusei/':'shogakusei', '/lessons/oyatsu/':'oyatsu' }[path] || '');
  const cleanToken = value => /^[a-z0-9_/-]{1,60}$/i.test(value || '') ? value : 'other';
  // Delegation covers links added by the lesson finder after page load too.
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[href]');
    if (!link) return;
    let url; try { url = new URL(link.href, location.href); } catch (_) { return; }
    let position = link.dataset.location;
    if (!position) position = link.closest('.finder-result') ? 'lesson_finder' : link.closest('header') ? 'header' : link.closest('footer') ? 'footer' : 'body';
    const lesson = lessonOf(location.pathname) || lessonOf(url.pathname) || 'all';
    const values = { cta_location: cleanToken(position), lesson };
    if (url.hostname === 'lin.ee' && url.pathname === '/vgqcSd6') send('line_cta_click', values);
    else if (url.hostname === 'www.instagram.com' || url.hostname === 'instagram.com') send('instagram_click', values);
    else if (url.origin === location.origin && url.hash === '#club') send('club_interest_click', values);
    else if (url.origin === location.origin && lessonOf(url.pathname)) send('lesson_select', values);
  });
  document.addEventListener('click', event => {
    const button = event.target.closest?.('[data-find-lesson]');
    if (button && ['oyako','shogakusei','oyatsu'].includes(button.dataset.findLesson)) send('lesson_finder_select', { lesson: button.dataset.findLesson });
  });
})();
