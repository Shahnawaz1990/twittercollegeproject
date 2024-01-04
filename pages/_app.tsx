import type { AppProps } from 'next/app'
import {Toaster} from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'

import Layout from '@/components/Layout'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
import EditModal from '@/components/modals/EditModal'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <Toaster />
    <EditModal />
    <RegisterModal />
    <LoginModal />
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}



/*
npm install react-icons
npm install zustand
npm install -D prisma
npx prisma init
npx prisma db push
npm install @prisma/client
npm install bcrypt
npm install -D @types/bcrypt
npm install next-auth
npm install @next-auth/prisma-adapter
npm install swr
npm install axios
npm install react-hot-toast
npm install react-spinners
npm install date-fns
npm install react-dropzone

testname
test@gmail.com
test123

newuser@new.com
newuser
newuser
test123
*/
