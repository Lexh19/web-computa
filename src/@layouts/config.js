import { AppContentLayoutNav, ContentWidth, FooterType, NavbarType } from '@layouts/enums'
import { breakpointsVuetify } from '@vueuse/core'

export const config = {
  app: {
    title: 'Title',
    logo: h('img', { src: '/src/assets/logo.svg' }),

    // logo: () => h('img', { src: 'assets/colored-logo.png' }, null),
    contentWidth: ref(ContentWidth.Boxed),
    contentLayoutNav: ref(AppContentLayoutNav.Vertical),
    overlayNavFromBreakpoint: breakpointsVuetify.md,
    enableI18n: true,
    isRtl: ref(false),
  },
  navbar: {
    type: ref(NavbarType.Sticky),
    navbarBlur: ref(true),
  },
  footer: { type: ref(FooterType.Static) },
  verticalNav: {
    isVerticalNavCollapsed: ref(false),
    defaultNavItemIconProps: { icon: 'tabler:indent-increase' },
  },
  horizontalNav: {
    type: ref('sticky'),
  },
  icons: {
    chevronDown: { icon: 'tabler-chevron-down' },
    chevronRight: { icon: 'tabler-chevron-right' },
    close: { icon: 'tabler-x' },
    verticalNavPinned: { icon: ' tabler:indent-decrease ' },
    verticalNavUnPinned: { icon: ' tabler:indent-increase ' },
    sectionTitlePlaceholder: { icon: 'tabler-minus' },
  },
}
