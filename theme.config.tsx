import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/zhuqingyun0510/nextra',
  },
  chat: {
    link: 'https://lobe.noip.chat',
   // icon: <img src="/pages/lobe.png" alt="Alt text" title="title" />,
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  docsRepositoryBase: 'https://github.com/zhuqingyun0510/nextra/tree/main',
  useNextSeoProps() {
    // const { asPath } = useRouter()
    // if (asPath !== '/') {
      return {
        // 设置浏览器标题
        titleTemplate: '%s – NOIP Copilot',
      }
    // }
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="" target="_blank">
          Zhuqingyun
        </a>
      </span>
    )
  },
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="18" x="3" y="3" rx="1"></rect><path d="M7 3v18"></path><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"></path></svg>
      <span style={{ marginLeft: '.5em', fontWeight: 800, width: 220 }}>
        NOIP Copilot
      </span>
    </>
  ),
}

export default config;
