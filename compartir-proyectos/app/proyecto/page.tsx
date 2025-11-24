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

// ⚠️ IMPORTANTE: Next/Image para evitar errores
import Image from "next/image"

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

        {/* ---------------------------------------------------------------- */}
        {/* ------------------------- CONTENIDO ---------------------------- */}
        {/* ---------------------------------------------------------------- */}

        <section className="w-full px-6 py-10">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">

            {/* Título */}
            <h2 className="text-2xl font-semibold text-[#0E4A54] mb-6">
              Producción cortometraje
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* ---- Imagen grande ---- */}
              <div className="md:col-span-2">
                <Image
                  src="/img/placeholder.webp"
                  width={800}
                  height={500}
                  alt="Producción"
                  className="rounded-xl w-full object-cover"
                />

                <div className="mt-4">
                  <span className="text-sm text-red-400 font-semibold">
                    Estudiante 1
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

              {/* ---- Comentarios ---- */}
              <div className="flex flex-col gap-6">

                {/* Comentario 1 */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/img/placeholder.webp"
                    width={50}
                    height={50}
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <span className="text-sm text-gray-500">Estudiante 2</span>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur sit</p>
                  </div>
                </div>

                {/* Comentario 2 */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/img/placeholder.webp"
                    width={50}
                    height={50}
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <span className="text-sm text-gray-500">Estudiante 3</span>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur sit</p>
                  </div>
                </div>

                {/* Comentario 3 */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/img/placeholder.webp"
                    width={50}
                    height={50}
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <span className="text-sm text-gray-500">Estudiante 4</span>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur sit</p>
                  </div>
                </div>

                 {/* Comentario 4 */}
                 <div className="flex items-center gap-4">
                  <Image
                    src="/img/placeholder.webp"
                    width={50}
                    height={50}
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <span className="text-sm text-gray-500">Estudiante 5</span>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur sit</p>
                  </div>
                </div>

                {/* Input comentario */}
                <div className="mt-auto mb-4 w-full flex justify-end">
                    <input
                        type="text"
                        placeholder="Escribe un comentario"
                        className="border rounded-lg px-4 py-2 text-sm text-gray-700 w-full"
                    />
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* ---------------------------------------------------------------- */}
        {/* ------------------------- CONTENIDO ---------------------------- */}
        {/* ---------------------------------------------------------------- */}

        <section className="w-full px-6 py-10">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">

            {/* Título */}
            <h2 className="text-2xl font-semibold text-[#0E4A54] mb-6">
              Producción cortometraje
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* ---- Imagen grande ---- */}
              <div className="md:col-span-2">
                <Image
                  src="/img/placeholder.webp"
                  width={800}
                  height={500}
                  alt="Producción"
                  className="rounded-xl w-full object-cover"
                />

                <div className="mt-4">
                  <span className="text-sm text-red-400 font-semibold">
                    Estudiante 1
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

              {/* ---- Comentarios ---- */}
              <div className="flex flex-col gap-6">

                {/* Comentario 1 */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/img/placeholder.webp"
                    width={50}
                    height={50}
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <span className="text-sm text-gray-500">Estudiante 2</span>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur sit</p>
                  </div>
                </div>

                {/* Comentario 2 */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/img/placeholder.webp"
                    width={50}
                    height={50}
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <span className="text-sm text-gray-500">Estudiante 3</span>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur sit</p>
                  </div>
                </div>

                {/* Comentario 3 */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/img/placeholder.webp"
                    width={50}
                    height={50}
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <span className="text-sm text-gray-500">Estudiante 4</span>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur sit</p>
                  </div>
                </div>
                 {/* Comentario 4 */}
                 <div className="flex items-center gap-4">
                  <Image
                    src="/img/placeholder.webp"
                    width={50}
                    height={50}
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <span className="text-sm text-gray-500">Estudiante 5</span>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur sit</p>
                  </div>
                </div>
                 {/* Comentario 5 */}
                 <div className="flex items-center gap-4">
                  <Image
                    src="/img/placeholder.webp"
                    width={50}
                    height={50}
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <span className="text-sm text-gray-500">Estudiante 6</span>
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur sit</p>
                  </div>
                </div>

                {/* Input comentario */}
                <div className="mt-auto mb-4 w-full flex justify-end">
                    <input
                        type="text"
                        placeholder="Escribe un comentario"
                        className="border rounded-lg px-4 py-2 text-sm text-gray-700 w-full"
                    />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full mt-8 pt-6 border-t">
          <div className="max-w-6xl mx-auto text-center px-4">

            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-[#0E4A54] font-medium mb-3">
              <a href="#" className="hover:underline">Home / News</a>
              <a href="/proyectos" className="hover:underline">Proyectos</a>
              <a href="/secretaria" className="hover:underline">Secretaria</a>
              <a href="/reuniones" className="hover:underline">Reuniones</a>
              <a href="/quedadas" className="hover:underline">Quedadas</a>
              <a href="/incidencias" className="hover:underline">Incidencias</a>
            </nav>

            <p className="text-sm text-gray-500 mt-1 mb-6">
              © 2025 Name -- Portal Campus
            </p>
          </div>
        </footer>

      </SidebarInset>
    </SidebarProvider>
  )
}
