document.getElementById('queryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cantidadPedidos = parseInt(document.getElementById('cantidadPedidos').value);
    const inicioOrdende = parseInt(document.getElementById('inicioOrdende').value);
    const inicioReclutadores = parseInt(document.getElementById('inicioReclutadores').value);

    let result = '';

    for (let i = 0; i < cantidadPedidos; i++) {
        const idPedido = parseInt(document.getElementById(`idPedido_${i}`).value);
        const idReclutado = parseInt(document.getElementById(`idReclutado_${i}`).value);

        const idOrdende1 = inicioOrdende + i * 2;
        const idOrdende2 = inicioOrdende + i * 2 + 1;
        const idReclutador1 = inicioReclutadores + i * 2;
        const idReclutador2 = inicioReclutadores + i * 2 + 1;

        result += `-- Pedido ${i + 1}\n`;

        result += `<div class="query-text">INSERT INTO gestionpedidos.ordendeservicio 
(idordendeservicio, idsucursal, idpedido, idpedidoreclutado, idadjunto, noordendeservicio, recomendacionesexam, fechaexamen, horaexamen, usuariocreacion, fechacreacion, usuariomodifica, fechamodifica, ultimo, idtipofacturacion, idclaseexamen, idtipoexamen)
VALUES (${idOrdende1}, 18, ${idPedido}, ${idReclutado}, 0, '0', 'NO APLICA', '2024-08-01', '09:00:00', 'davila', NOW(), null, null, true, 2, 1, 2);</div>`;

        result += `<div class="query-text">INSERT INTO gestionpedidos.ordendeservicio 
(idordendeservicio, idsucursal, idpedido, idpedidoreclutado, idadjunto, noordendeservicio, recomendacionesexam, fechaexamen, horaexamen, usuariocreacion, fechacreacion, usuariomodifica, fechamodifica, ultimo, idtipofacturacion, idclaseexamen, idtipoexamen)
VALUES (${idOrdende2}, 21, ${idPedido}, ${idReclutado}, 0, '0', 'NO APLICA', '2024-08-01', '09:00:00', 'davila', NOW(), null, null, true, 2, 1, 1);</div>`;

        result += `<div class="query-text">INSERT INTO gestionpedidos.reclutadoresulexamestud 
(idreclutaresultexamestud, idpedidoreclutado, idtipoproveedor, idordendeservicio, resultado, usuariocreacion, fechacreacion, usuariomodifica, fechamodifica)
VALUES (${idReclutador1}, ${idReclutado}, 2, ${idOrdende1}, 'APTO', 'davila', NOW(), null, null);</div>`;

        result += `<div class="query-text">INSERT INTO gestionpedidos.reclutadoresulexamestud 
(idreclutaresultexamestud, idpedidoreclutado, idtipoproveedor, idordendeservicio, resultado, usuariocreacion, fechacreacion, usuariomodifica, fechamodifica)
VALUES (${idReclutador2}, ${idReclutado}, 1, ${idOrdende2}, 'APTO', 'davila', NOW(), null, null);</div>`;
    }

    document.getElementById('result').innerHTML = result;
});

document.getElementById('cantidadPedidos').addEventListener('change', function() {
    const cantidadPedidos = parseInt(this.value);
    const pedidoInputsContainer = document.getElementById('pedidoInputs');

    pedidoInputsContainer.innerHTML = ''; // Limpiar inputs previos

    for (let i = 0; i < cantidadPedidos; i++) {
        pedidoInputsContainer.innerHTML += `
            <div class="form-control">
                <input type="number" id="idPedido_${i}" required>
                <label><span>Pedido ${i + 1}: idpedido</span></label>
            </div>
            <div class="form-control">
                <input type="number" id="idReclutado_${i}" required>
                <label><span>Pedido ${i + 1}: idpedidoreclutado</span></label>
            </div>
        `;
    }
});
