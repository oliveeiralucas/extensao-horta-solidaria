import React from 'react'

const Gallery: React.FC = () => {
  return (
    <section className="w-full bg-white pt-10">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Galeria de imagens
        </h2>
        <p className="text-sm text-gray-700 md:text-xl">
          Confira um pouco do nosso trabalho e dos nossos colaboradores
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-4 px-5 py-2 lg:px-32 lg:pb-20">
        <div className="p-1 md:p-2">
          <img
            alt="gallery"
            className="block size-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1611843467160-25afb8df1074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="col-span-2 row-span-2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block size-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="p-1 md:p-2 ">
          <img
            alt="gallery"
            className="block size-full rounded-lg object-cover object-center"
            src="https://plus.unsplash.com/premium_photo-1679765934200-d1cb3153c631?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="p-1 md:p-2">
          <img
            alt="gallery"
            className="block size-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1524247108137-732e0f642303?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="p-1 md:p-2">
          <img
            alt="gallery"
            className="block size-full rounded-lg object-cover object-center"
            src="https://plus.unsplash.com/premium_photo-1678723983451-555c2c4e3b9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>
  )
}

export default Gallery
