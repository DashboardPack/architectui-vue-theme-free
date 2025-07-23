import { config } from '@vue/test-utils'
import { vi } from 'vitest'

// Mock global objects
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
})

// Mock localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn()
  }
})

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn()
})

// Global test configuration
config.global.stubs = {
  // Stub FontAwesome components
  'font-awesome-icon': true,

  // Stub router components
  'router-link': true,
  'router-view': true,

  // Stub perfect scrollbar
  PerfectScrollbar: true
}

// Global test configuration - minimal setup
// Individual test files will handle their own mocking as needed
