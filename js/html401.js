setTimeout(function() {
    window.location.href = 'login.html';
}, 3000);





// async function getDataWithBearerToken(url, token) {
//     try{
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'accept': 'text/plain'
//                 // Agrega cualquier otro encabezado necesario aquí
//             }
//         });
//         if (response.ok = true){
//             return true;
//         }
//     }
//     catch {
//         return false;
//     }
// }


// // Llamada a la función con la URL y el token
// const token = ''; // Reemplaza esto con tu token
// const url = 'http://localhost:5280/api/Auth'; // URL de tu API

// getDataWithBearerToken(url, token);
