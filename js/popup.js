function togglePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        setTimeout(() => {
            popup.style.opacity = '1';
            overlay.style.opacity = '1';
        }, 10); 
    } else {
        popup.style.opacity = '0';
        overlay.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }, 300);
        removePopupContent();
    }
}

const salesElement = document.querySelector("#salesConsulta");
salesElement.addEventListener('click', () => {
    getOficinas();
});
async function getOficinas() {
    try {
        let reqData = await fetch("http://localhost:5280/api/Oficina");
        let respJson = await reqData.json();
        addTr(["Id Oficina", "Telefono"]);
        // Obtén la referencia al cuerpo de la tabla
        const cuerpoTabla = document.querySelector("#miTabla");
        // Limpiar contenido existente en el cuerpo de la tabla
        cuerpoTabla.innerHTML = "";
        // Itera sobre los objetos en respJson y crea filas y celdas
        respJson.forEach((oficina) => {
            // Crea una nueva fila
            const fila = cuerpoTabla.insertRow();
            // Crea celdas y asigna valores a cada celda
            const celdaNombre = fila.insertCell();
            celdaNombre.textContent = oficina.id;
            const celdaNombreContacto = fila.insertCell();
            celdaNombreContacto.textContent = oficina.telefono;
            const celdaApellidoContacto = fila.insertCell();
            celdaApellidoContacto.textContent = oficina.email;
            const celdaTelefono = fila.insertCell();
            celdaTelefono.textContent = oficina.idOficinaFk;
            const celdaFax = fila.insertCell();
            celdaFax.textContent = oficina.fax;
            const celdaLimiteCredito = fila.insertCell();
            celdaLimiteCredito.textContent = oficina.limiteCredito;
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

// 1
const clientesBtn = document.querySelector("#clienteDatosRepresentanteVenta");
clientesBtn.addEventListener('click', () => {
    obtenerClientesYRepresentantes();
});

async function obtenerClientesYRepresentantes() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/cliente/clienteDatosRepresentanteVenta");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["Nombre Cliente", "Nombre Representante", "Apellido Representante"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    respJson.forEach(cliente => {
        const fila = cuerpoTabla.insertRow();
        const celdaNombreCliente = fila.insertCell();
        celdaNombreCliente.textContent = cliente.nombre;

        const celdaNombreRepresentante = fila.insertCell();
        celdaNombreRepresentante.textContent = cliente.nombreContacto;

        const celdaApellidoRepresentante = fila.insertCell();
        celdaApellidoRepresentante.textContent = cliente.apellidoContacto;
    });
}


// 2
const clienterepresentanteventa = document.querySelector("#clienteDatosRepresentanteVenta");
clienterepresentanteventa.addEventListener('click', () => {
    obtenerClientesYRepresentantes();
});

async function obtenerClientesYRepresentantes() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/cliente/clienteDatosRepresentanteVenta");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["Nombre Cliente", "Nombre Representante", "Apellido Representante"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    respJson.forEach(cliente => {
        const fila = cuerpoTabla.insertRow();
        const celdaNombreCliente = fila.insertCell();
        celdaNombreCliente.textContent = cliente.nombre;

        const celdaNombreRepresentante = fila.insertCell();
        celdaNombreRepresentante.textContent = cliente.nombreContacto;

        const celdaApellidoRepresentante = fila.insertCell();
        celdaApellidoRepresentante.textContent = cliente.apellidoContacto;
    });
}


// 3
// const clientesNoPagosRepresentantes = document.querySelector("#clientesNoPagosRepresentantes");
// clientesNoPagosRepresentantes.addEventListener('click', () => {
//     obtenerClientesNoPagosRepresentantes();
// });

// async function obtenerClientesNoPagosRepresentantes() {
//     let respJson;
//     try {
//         let reqData = await fetch("http://localhost:5280/api/cliente/clientesNoPagosRepresentantes");
//         respJson = await reqData.json();
//     } catch (error) {
//         console.error('Error al obtener datos:', error);
//     }
//     mostrarClientesNoPagosRepresentantesEnTabla(respJson);
// }

// function mostrarClientesNoPagosRepresentantesEnTabla(data) {
//     const cuerpoTabla = document.querySelector("#miTabla");
//     cuerpoTabla.innerHTML = "";

//     // Agregar encabezados
//     const encabezados = ["Nombre Cliente", "Nombre Contacto"];
//     const filaEncabezados = cuerpoTabla.insertRow();
//     encabezados.forEach(encabezado => {
//         const th = document.createElement('th');
//         th.textContent = encabezado;
//         filaEncabezados.appendChild(th);
//     });

//     // Mostrar datos en la tabla
//     data.forEach(cliente => {
//         const fila = cuerpoTabla.insertRow();
//         const celdaNombreCliente = fila.insertCell();
//         celdaNombreCliente.textContent = cliente.nombre;

//         const celdaNombreContacto = fila.insertCell();
//         celdaNombreContacto.textContent = cliente.nombreContacto;
//     });
// }

const clientesPagosRepresentantes = document.querySelector("#clientesPagosRepresentantes");
clientesPagosRepresentantes.addEventListener('click', () => {
    obtenerClientesPagosRepresentantes();
});

async function obtenerClientesPagosRepresentantes() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/cliente/clientesPagosRepresentantes");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    mostrarClientesPagosRepresentantesEnTabla(respJson);
}

function mostrarClientesPagosRepresentantesEnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["ID", "Nombre Cliente", "Nombre Contacto"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(cliente => {
        const fila = cuerpoTabla.insertRow();
        const celdaID = fila.insertCell();
        celdaID.textContent = cliente.id;

        const celdaNombreCliente = fila.insertCell();
        celdaNombreCliente.textContent = cliente.nombre;

        const celdaNombreContacto = fila.insertCell();
        celdaNombreContacto.textContent = cliente.nombreContacto;
    });
}



const clientesPagosRepresentantesCiudad = document.querySelector("#clientesPagosRepresentantesCiudad");
clientesPagosRepresentantesCiudad.addEventListener('click', () => {
    obtenerClientesPagosCiudad();
});

async function obtenerClientesPagosCiudad() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/cliente/clientesPagosRepresentantesCiudad");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    mostrarClientesPagosCiudadEnTabla(respJson);
}

function mostrarClientesPagosCiudadEnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["Nombre Cliente", "Nombre Representante", "Ciudad Representante"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(cliente => {
        const fila = cuerpoTabla.insertRow();
        const celdaNombreCliente = fila.insertCell();
        celdaNombreCliente.textContent = cliente.nombreCliente;

        const celdaNombreRepresentante = fila.insertCell();
        celdaNombreRepresentante.textContent = cliente.nombreRepresentante;

        const celdaCiudadRepresentante = fila.insertCell();
        celdaCiudadRepresentante.textContent = cliente.ciudadRepresentante;
    });
}


const fuenlabrada = document.querySelector("#fuenlabrada");
fuenlabrada.addEventListener('click', () => {
    obtenerDireccionClientesFuenlabrada();
});

async function obtenerDireccionClientesFuenlabrada() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/cliente/direccionClientesFuenlabrada");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    mostrarDireccionClientesFuenlabradaEnTabla(respJson);
}

function mostrarDireccionClientesFuenlabradaEnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["Dirección Oficina"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(item => {
        const fila = cuerpoTabla.insertRow();
        const celdaDireccionOficina = fila.insertCell();
        celdaDireccionOficina.textContent = JSON.stringify(item.DireccionOficina);
    });
}


const empleadosBtn = document.querySelector("#empleadosBtn");
empleadosBtn.addEventListener('click', () => {
    obtenerEmpleados();
});

async function obtenerEmpleados() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/Empleado");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    console.log(respJson);
    mostrarEmpleadosEnTabla(respJson);
}

function mostrarEmpleadosEnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";
    // Agregar encabezados
    const encabezados = ["Nombre", "Apellido", "Email"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(empleado => {
        const fila = cuerpoTabla.insertRow();
        const celdaNombre = fila.insertCell();
        celdaNombre.textContent = empleado.nombre;

        const celdaApellido = fila.insertCell();
        celdaApellido.textContent = empleado.apellido;

        const celdaEmail = fila.insertCell();
        celdaEmail.textContent = empleado.email;
    });
}


const empleadoJefeBtn = document.querySelector("#empleadoJefeBtn");
empleadoJefeBtn.addEventListener('click', () => {
    obtenerEmpleadoJefe();
});

async function obtenerEmpleadoJefe() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/Empleado/empleadojefe");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    mostrarEmpleadoJefeEnTabla(respJson);
}

function mostrarEmpleadoJefeEnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["Puesto", "Nombre", "Apellido", "Email"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(empleado => {
        const fila = cuerpoTabla.insertRow();
        const celdaPuesto = fila.insertCell();
        celdaPuesto.textContent = empleado.puesto;

        const celdaNombre = fila.insertCell();
        celdaNombre.textContent = empleado.nombre;

        const celdaApellido = fila.insertCell();
        celdaApellido.textContent = empleado.apellido;

        const celdaEmail = fila.insertCell();
        celdaEmail.textContent = empleado.email;
    });
}



const empleadosJefesDeJefeBtn = document.querySelector("#empleadosJefesDeJefeBtn");
empleadosJefesDeJefeBtn.addEventListener('click', () => {
    obtenerEmpleadosJefesDeJefe();
});

async function obtenerEmpleadosJefesDeJefe() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/empleado/empleadosJefesDeJefe");
        respJson = await reqData.json();
        console.log(respJson);
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    mostrarEmpleadosJefesDeJefeEnTabla(respJson);
}

function mostrarEmpleadosJefesDeJefeEnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["Nombre Empleado", "Apellido", "Email", "Nombre Jefe", "Nombre Jefe de Jefe"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(empleado => {
        const fila = cuerpoTabla.insertRow();
        const celdaNombreEmpleado = fila.insertCell();
        celdaNombreEmpleado.textContent = empleado.nombreEmpleado;

        const celdaApellido = fila.insertCell();
        celdaApellido.textContent = empleado.apellido;

        const celdaEmail = fila.insertCell();
        celdaEmail.textContent = empleado.email;

        const celdaNombreJefe = fila.insertCell();
        celdaNombreJefe.textContent = empleado.nombreJefe;

        const celdaNombreJefeDeJefe = fila.insertCell();
        celdaNombreJefeDeJefe.textContent = empleado.nombreJefeDeJefe;
    });
}


const empleadosJefeBtn = document.querySelector("#empleadosJefeBtn");
empleadosJefeBtn.addEventListener('click', () => {
    obtenerEmpleadosJefe();
});

async function obtenerEmpleadosJefe() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/empleado/empleadojefe");
        respJson = await reqData.json();
        console.log(respJson);
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    mostrarEmpleadosJefeEnTabla(respJson);
}

function mostrarEmpleadosJefeEnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["Puesto", "Nombre", "Apellido", "Email"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(empleado => {
        const fila = cuerpoTabla.insertRow();
        const celdaPuesto = fila.insertCell();
        celdaPuesto.textContent = empleado.puesto;

        const celdaNombre = fila.insertCell();
        celdaNombre.textContent = empleado.nombre;

        const celdaApellido = fila.insertCell();
        celdaApellido.textContent = empleado.apellido;

        const celdaEmail = fila.insertCell();
        celdaEmail.textContent = empleado.email;
    });
}


const estadosBtn = document.querySelector("#estadosBtn");
estadosBtn.addEventListener('click', () => {
    obtenerEstados();
});

async function obtenerEstados() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/Estado");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    mostrarEstadosEnTabla(respJson);
}

function mostrarEstadosEnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["Nombre"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(estado => {
        const fila = cuerpoTabla.insertRow();
        const celdaNombre = fila.insertCell();
        celdaNombre.textContent = estado.nombre;
    });
}


const pagospaypal2008 = document.querySelector("#pagospaypal2008");
pagospaypal2008.addEventListener('click', () => {
    obtenerPagosPaypal2008();
});

async function obtenerPagosPaypal2008() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/pago/pagopaypal2008");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    mostrarPagosEnTabla(respJson);
}

function mostrarPagosEnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["ID Pago", "Fecha de Pago", "Total", "Forma de Pago"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(pago => {
        const fila = cuerpoTabla.insertRow();
        const celdaIdPago = fila.insertCell();
        celdaIdPago.textContent = pago.id;

        const celdaFechaPago = fila.insertCell();
        celdaFechaPago.textContent = new Date(pago.fechaPago).toLocaleDateString();

        const celdaTotal = fila.insertCell();
        celdaTotal.textContent = pago.total;

        const celdaFormaPago = fila.insertCell();
        celdaFormaPago.textContent = pago.formaPago;
    });
}


const pedidosExpirados = document.querySelector("#pedidosExpirados");
pedidosExpirados.addEventListener('click', () => {
    obtenerPedidosTarde();
});

async function obtenerPedidosTarde() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/Pedido/pedidotarde");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    mostrarPedidosEnTabla(respJson);
}

function mostrarPedidosEnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["ID Pedido", "ID Cliente", "Fecha Esperada", "Fecha de Entrega"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(pedido => {
        const fila = cuerpoTabla.insertRow();
        const celdaIdPedido = fila.insertCell();
        celdaIdPedido.textContent = pedido.id;

        const celdaIdCliente = fila.insertCell();
        celdaIdCliente.textContent = pedido.idClienteFk;

        const celdaFechaEsperada = fila.insertCell();
        celdaFechaEsperada.textContent = new Date(pedido.fechaEsperada).toLocaleDateString();

        const celdaFechaEntrega = fila.insertCell();
        celdaFechaEntrega.textContent = new Date(pedido.fechaEntrega).toLocaleDateString();
    });
}

const formasPagoBtn = document.querySelector("#formasPagoBtn");
formasPagoBtn.addEventListener('click', () => {
    obtenerFormasPago();
});

async function obtenerFormasPago() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/formapago");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    mostrarFormasPagoEnTabla(respJson);
}

function mostrarFormasPagoEnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["ID", "Nombre de Forma de Pago"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(formaPago => {
        const fila = cuerpoTabla.insertRow();
        const celdaId = fila.insertCell();
        celdaId.textContent = formaPago.id;

        const celdaNombre = fila.insertCell();
        celdaNombre.textContent = formaPago.nombre;
    });
}

const productosOrnamentalesBtn100 = document.querySelector("#productosOrnamentalesBtn100");
productosOrnamentalesBtn100.addEventListener('click', () => {
    obtenerProductosOrnamentales();
});

async function obtenerProductosOrnamentales() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/producto/productosornamentales100");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    mostrarProductosOrnamentalesEnTabla(respJson);
}

function mostrarProductosOrnamentalesEnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["ID", "Nombre", "Dimensiones", "Precio de Venta", "Cantidad", "Cantidad Mínima", "Cantidad Máxima", "ID de Gama"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(producto => {
        const fila = cuerpoTabla.insertRow();
        const celdaId = fila.insertCell();
        celdaId.textContent = producto.id;

        const celdaNombre = fila.insertCell();
        celdaNombre.textContent = producto.nombre;

        const celdaDimensiones = fila.insertCell();
        celdaDimensiones.textContent = producto.dimensiones;

        const celdaPrecioVenta = fila.insertCell();
        celdaPrecioVenta.textContent = producto.precioVenta;

        const celdaCantidad = fila.insertCell();
        celdaCantidad.textContent = producto.cantidad;

        const celdaCantidadMin = fila.insertCell();
        celdaCantidadMin.textContent = producto.cantidadMin;

        const celdaCantidadMax = fila.insertCell();
        celdaCantidadMax.textContent = producto.cantidadMax;

        const celdaIdGamaProductoFk = fila.insertCell();
        celdaIdGamaProductoFk.textContent = producto.idGamaProductoFk;
    });
}


const clientesMadridBtn1130 = document.querySelector("#clientesMadridBtn1130");
clientesMadridBtn1130.addEventListener('click', () => {
    obtenerClientesMadrid11O30();
});

async function obtenerClientesMadrid11O30() {
    let respJson;
    try {
        let reqData = await fetch("http://localhost:5280/api/cliente/clientesmadrid11o30");
        respJson = await reqData.json();
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
    mostrarClientesMadrid11O30EnTabla(respJson);
}

function mostrarClientesMadrid11O30EnTabla(data) {
    const cuerpoTabla = document.querySelector("#miTabla");
    cuerpoTabla.innerHTML = "";

    // Agregar encabezados
    const encabezados = ["Nombre Cliente"];
    const filaEncabezados = cuerpoTabla.insertRow();
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        filaEncabezados.appendChild(th);
    });

    // Mostrar datos en la tabla
    data.forEach(cliente => {
        const fila = cuerpoTabla.insertRow();
        const celdaNombreCliente = fila.insertCell();
        celdaNombreCliente.textContent = cliente.nombre;
    });
}



function addTr(lista) {
    let popup_top = document.getElementById("popup-top");
    lista.forEach(child => {
        let th = document.createElement('th');
        th.textContent = child; // Corrección: Usar '=' en lugar de '()'
        popup_top.appendChild(th);
    });
}
function removePopupContent() {
    let popup_top = document.getElementById("popup-top");
    let content = document.getElementById("miTabla");
    content.innerHTML = '';
    popup_top.innerHTML = ''; // Establece el contenido HTML del elemento como vacío
}
