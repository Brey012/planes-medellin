
const BotonReserva = () => {
    const numeroTelefono = "573022764759";
    
    const mensaje = "Hola, me gustaría conocer Medellín con ustedes";

    const codificarMensaje = encodeURIComponent(mensaje);

    const whatsappUrl = `https://wa.me/${numeroTelefono}?text=${codificarMensaje}`;

    return (
    <a 
        href={whatsappUrl}
        target='_blank'
        rel="noopener noreferrer"
        className="
        flex justify-center items-center gap-3 bg-[#29A71A] text-white text-center text-[1.3rem] p-4 rounded-full font-black shadow-2xl cursor-pointer max-w-[600px] sm:text-3xl md:text-2xl lg:text-5xl xl:text-4xl 2xl:text-5xl"
    >
        <img 
            className="w-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20"
            src="/whatsapp.svg" 
            alt="whatsapp" 

        />
        RESERVA AHORA
    </a>

    )
}

export default BotonReserva;