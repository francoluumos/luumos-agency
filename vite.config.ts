import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // E2E preview port pinned to 4181 (luumos-agency's slot in the port registry —
  // see TESTING.md). strictPort so a clash fails loudly instead of drifting onto
  // another project's preview server.
  preview: { port: 4181, strictPort: true },
})
