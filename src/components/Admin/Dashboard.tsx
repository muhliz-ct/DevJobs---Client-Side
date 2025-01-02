import React from 'react'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import { AppSidebar } from './components/app-sidebar'



const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-screen h-screen bg-slate-400'>
         <div>
            <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
            </SidebarProvider>
         </div>

         <div>

         </div>
    </div>
  )
}

export default Dashboard