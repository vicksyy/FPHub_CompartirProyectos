import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-1">
          <div className="bg-muted/50 aspect-video rounded-xl max-h-[30vh] min-w-[84.5vw] overflow-x-auto whitespace-nowrap flex items-center gap-2 p-4">
            {/* Pastillas */}
            <span className="px-3 py-1 bg-muted rounded-full flex-shrink-0">Etiqueta 1</span>
            <span className="px-3 py-1 bg-muted rounded-full flex-shrink-0">Etiqueta 2</span>
            <span className="px-3 py-1 bg-muted rounded-full flex-shrink-0">Etiqueta 3</span>
            <span className="px-3 py-1 bg-muted rounded-full flex-shrink-0">Etiqueta 4</span>
            <span className="px-3 py-1 bg-muted rounded-full flex-shrink-0">Etiqueta 5</span>
        </div>
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
