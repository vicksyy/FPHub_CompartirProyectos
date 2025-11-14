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
        <div className="w-full overflow-x-auto">
  <div className="flex gap-4 p-2 whitespace-nowrap">

    {/* Pastilla 1 */}
    <div className="relative w-68 h-68 flex-shrink-0 rounded-xl overflow-hidden bg-muted cursor-pointer">
      <img
        src="/imgs/daw1.jpg"
        alt="DAW 1"
        className="object-cover w-full h-full"
      />
      <span className="absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
        DAW 1
      </span>
    </div>

    {/* Pastilla 2 */}
    <div className="relative w-68 h-68 flex-shrink-0 rounded-xl overflow-hidden bg-muted cursor-pointer">
      <img
        src="/imgs/daw2.jpg"
        alt="DAW 2"
        className="object-cover w-full h-full"
      />
      <span className="absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
        DAW 2
      </span>
    </div>

    {/* Pastilla 3 */}
    <div className="relative w-68 h-68 flex-shrink-0 rounded-xl overflow-hidden bg-muted cursor-pointer">
      <img
        src="/imgs/dam1.jpg"
        alt="DAM 1"
        className="object-cover w-full h-full"
      />
      <span className="absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
        DAM 1
      </span>
    </div>

    {/* Pastilla 4 */}
    <div className="relative w-68 h-68 flex-shrink-0 rounded-xl overflow-hidden bg-muted cursor-pointer">
      <img
        src="/imgs/hardware.jpg"
        alt="Hardware"
        className="object-cover w-full h-full"
      />
      <span className="absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
        HARDWARE
      </span>
    </div>
      {/* Pastilla 5 */}
      <div className="relative w-68 h-68 flex-shrink-0 rounded-xl overflow-hidden bg-muted cursor-pointer">
      <img
        src="/imgs/hardware.jpg"
        alt="Hardware"
        className="object-cover w-full h-full"
      />
      <span className="absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
        HARDWARE
      </span>
    </div>
      {/* Pastilla 6 */}
      <div className="relative w-68 h-68 flex-shrink-0 rounded-xl overflow-hidden bg-muted cursor-pointer">
      <img
        src="/imgs/hardware.jpg"
        alt="Hardware"
        className="object-cover w-full h-full"
      />
      <span className="absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
        HARDWARE
      </span>
    </div>

  </div>
</div>

          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
