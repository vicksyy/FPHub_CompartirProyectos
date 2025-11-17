"use client"

import * as React from "react"
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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* HEADER */}
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

        {/* CONTENT WRAPPER */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-x-hidden">

          {/* ---------- CARRUSEL ---------- */}
          <div className="w-full px-4">
            <h2 className="text-xl font-semibold mb-2">
              Proyectos por curso
            </h2>

            <Carousel className="w-full relative">
              <CarouselContent className="-ml-2 md:-ml-4">

                {/* ITEM 1 */}
                <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src="/imgs/daw1.jpg"
                        alt="DAW 1"
                        className="w-full h-[200px] object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md">
                        DAW 1
                      </span>
                    </div>
                  </div>
                </CarouselItem>

                {/* ITEM 2 */}
                <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src="/imgs/daw2.jpg"
                        alt="DAW 2"
                        className="w-full h-[200px] object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md">
                        DAW 2
                      </span>
                    </div>
                  </div>
                </CarouselItem>

                {/* ITEM 3 */}
                <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src="/imgs/dam1.jpg"
                        alt="DAM 1"
                        className="w-full h-[200px] object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md">
                        DAM 1
                      </span>
                    </div>
                  </div>
                </CarouselItem>

                {/* ITEM 4 */}
                <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src="/imgs/hardware.jpg"
                        alt="Hardware"
                        className="w-full h-[200px] object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md">
                        HARDWARE
                      </span>
                    </div>
                  </div>
                </CarouselItem>

                {/* ITEM 5 */}
                <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src="/imgs/hardware.jpg"
                        alt="Hardware"
                        className="w-full h-[200px] object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md">
                        HARDWARE
                      </span>
                    </div>
                  </div>
                </CarouselItem>

                {/* ITEM 6 */}
                <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src="/imgs/hardware.jpg"
                        alt="Hardware"
                        className="w-full h-[200px] object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded-md">
                        HARDWARE
                      </span>
                    </div>
                  </div>
                </CarouselItem>

              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* RESTO DEL CONTENIDO */}
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
