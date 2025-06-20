import Script from "next/script";

export default function Widget() {
  return (
    <Script
      id="bitrix-loader"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn-ru.bitrix24.ru/b31886438/crm/site_button/loader_4_hsk47i.js');
        `
      }}
    />
  );
}
