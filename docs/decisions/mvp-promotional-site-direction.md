---
id: mvp-promotional-site-direction
owner: 3MAntas
status: accepted
last_reviewed: 2026-06-30
update_trigger: on-scope-change
---

# ADR mvp-promotional-site-direction — Direccion del MVP del sitio

## Status

Accepted.

## Context

El proyecto nace para apoyar un emprendimiento familiar de mantas con una
presencia web clara, confiable y facil de mantener. En esta etapa no existe
codigo de aplicacion: solo hay definicion, proceso y decision documental.
Necesitamos una direccion inicial para evitar dispersarnos en el MVP.

## Decision

La primera version del sitio se define como una landing promocional con foco en
conversion y confianza.

1. Objetivo principal: generar contactos calificados (WhatsApp y formulario).
2. Objetivo secundario: exhibir productos de forma visual y simple.
3. Alcance MVP:
   - Portada con propuesta de valor y marca.
   - Catalogo inicial de mantas (grilla de productos).
   - Seccion de historia/calidad del emprendimiento.
   - CTA de contacto fijo (WhatsApp) y formulario simple.
4. Fuera de alcance MVP:
   - Carrito y pagos en linea.
   - Panel de administracion.
   - Autenticacion de usuarios.
5. Enfoque de implementacion: primero cerrar arquitectura tecnica y stack en el
   plan activo, luego ejecutar por iteraciones cortas.

## Consequences

Positivas:
- Permite entregar valor rapido con una web util para promocion real.
- Reduce complejidad inicial y riesgo tecnico.
- Deja una base clara para evolucion futura (ecommerce si aplica).

Negativas:
- No habra compra directa en el MVP.
- Parte de la operacion comercial seguira siendo manual.

Abierto:
- Seleccion final de stack frontend y hosting.
- Estrategia de contenido (cantidad de productos iniciales y calidad de fotos).
