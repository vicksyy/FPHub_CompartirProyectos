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
      </div>
          {/* RESTO DEL CONTENIDO */}
          <section className="w-full px-6 py-10">
      {/* Título */}
      <h2 className="text-2xl font-semibold text-red-400 mb-6">Destacado</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tarjeta principal */}
        <div className="md:col-span-2 bg-white rounded-xl shadow overflow-hidden">
          <img
            src="/images/control-room.jpg"
            alt="Control Room"
            className="w-full h-64 object-cover"
          />

          <div className="p-5">
            <span className="text-sm text-red-400 font-semibold">
              Alumno 1
            </span>
            <h3 className="text-xl font-bold mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem sit amet dolor
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem sit amet dolor.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem sit amet dolor.
            </p>
          </div>
        </div>

        {/* Columna con 3 tarjetas pequeñas */}
        <div className="flex flex-col space-y-4">
          {/* Tarjeta 2 */}
          <div className="flex bg-white rounded-xl shadow overflow-hidden">
            <img
              src="/images/news1.jpg"
              alt="News 1"
              className="w-28 h-28 object-cover"
            />
            <div className="p-3">
              <span className="text-sm text-gray-400">Alumno 2</span>
              <h4 className="font-semibold">Lorem ipsum dolor sit amet</h4>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur sit</p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="flex bg-white rounded-xl shadow overflow-hidden">
            <img
              src="/images/news2.jpg"
              alt="News 2"
              className="w-28 h-28 object-cover"
            />
            <div className="p-3">
              <span className="text-sm text-gray-400">Alumno 3</span>
              <h4 className="font-semibold">Lorem ipsum dolor sit amet</h4>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur sit</p>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="flex bg-white rounded-xl shadow overflow-hidden">
            <img
              src="/images/news3.jpg"
              alt="News 3"
              className="w-28 h-28 object-cover"
            />
            <div className="p-3">
              <span className="text-sm text-gray-400">Alumno 4</span>
              <h4 className="font-semibold">Lorem ipsum dolor sit amet</h4>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur sit</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full bg-[#104B57] py-16 px-6">
      {/* Título */}
      <h2 className="text-white text-3xl font-semibold mb-12 text-center">
        Comentarios
      </h2>

      {/* Contenedor de 3 columnas */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        
        {/* Comentario 1 */}
        <div className="flex flex-col items-center text-white space-y-4">
          <img
            src="/images/user1.jpg"
            alt="User 1"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold">Lorem</h3>
          <p className="text-sm text-gray-200 px-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat in nulla sed egestas. Mauris ac mi sapien.
          </p>
          <a
            href="#"
            className="text-gray-300 text-sm hover:text-white underline underline-offset-4"
          >
            Ver más +
          </a>
        </div>

        {/* Comentario 2 */}
        <div className="flex flex-col items-center text-white space-y-4">
          <img
            src="/images/user2.jpg"
            alt="User 2"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h3 className="text-xl font-semibold">Lorem</h3>
          <p className="text-sm text-gray-200 px-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat in nulla sed egestas. Mauris ac mi sapien.
          </p>
          <a
            href="#"
            className="text-gray-300 text-sm hover:text-white underline underline-offset-4"
          >
            Ver más +
          </a>
        </div>

        {/* Comentario 3 */}
        <div className="flex flex-col items-center text-white space-y-4">
          <img
            src="/images/user3.jpg"
            alt="User 3"
            className="w-24 h-24 rounded-full object-cover bg-white p-1"
          />
          <h3 className="text-xl font-semibold">Lorem</h3>
          <p className="text-sm text-gray-200 px-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat en nulla sed egestas. Mauris ac mi sapien.
          </p>
          <a
            href="#"
            className="text-gray-300 text-sm hover:text-white underline underline-offset-4"
          >
            Ver más +
          </a>
        </div>
      </div>
    </section>
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">

        {/* Columna de texto */}
        <div className="flex-1">
          {/* Badge decorativo */}
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full">
            Nuestra Comunidad
          </span>

          <h2 className="text-3xl font-bold text-[#103b47] mb-4">
            Comunidad
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem sit amet
            dolor. Lorem ipsum dolor sit amet.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing. Consectetur adipiscing
            elit lorem sit amet dolor.
          </p>

          <a
            href="#"
            className="text-red-500 text-sm font-medium relative group"
          >
            Ver más +
            <span className="block w-0 group-hover:w-full transition-all duration-300 h-[1px] bg-red-500"></span>
          </a>
        </div>

        {/* Imagen */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/images/community.jpg"
            alt="Comunidad"
            className="w-full max-w-sm rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
      </SidebarInset>
    </SidebarProvider>
  )
}
