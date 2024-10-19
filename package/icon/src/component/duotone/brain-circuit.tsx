
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `brain-circuit` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brain-circuit?s=duotone brain-circuit}
 * @preview ![brain-circuit](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE4NCAwQzE1NSAwIDEzMiAyMiAxMjkgNTBDMTAxIDU3IDgwIDgyIDgwIDExMkM4MCAxMTggODEgMTI0IDgzIDEzMEM1NCAxMzYgMzIgMTYxIDMyIDE5MkMzMiAyMDcgMzcgMjIxIDQ2IDIzMkMxOSAyNDUgMCAyNzIgMCAzMDRDMCAzMzggMjIgMzY3IDUyIDM3OUM1MCAzODUgNDggMzkyIDQ4IDQwMEM0OCA0MzUgNzcgNDY0IDExMiA0NjRDMTE4IDQ2NCAxMjMgNDYzIDEyOSA0NjJDMTMxIDQ5MCAxNTUgNTEyIDE4NCA1MTJDMjE1IDUxMiAyNDAgNDg3IDI0MCA0NTZWMjcySDE5MkMxODMuMTcyIDI3MiAxNzYgMjc5LjE3MiAxNzYgMjg4VjMzMS40MzJDMTkwLjEgMzM3LjYxNSAyMDAgMzUxLjYxNyAyMDAgMzY4QzIwMCAzOTAuMDkyIDE4Mi4wOTIgNDA4IDE2MCA0MDhTMTIwIDM5MC4wOTIgMTIwIDM2OEMxMjAgMzUxLjYxNyAxMjkuOSAzMzcuNjE1IDE0NCAzMzEuNDMyVjI4OEMxNDQgMjYxLjUzMSAxNjUuNTMxIDI0MCAxOTIgMjQwSDI0MFYxNjBIMTk2LjU2OEMxOTAuMzg1IDE3NC4xIDE3Ni4zODMgMTg0IDE2MCAxODRDMTM3LjkwOCAxODQgMTIwIDE2Ni4wOTIgMTIwIDE0NFMxMzcuOTA4IDEwNCAxNjAgMTA0QzE3Ni4zODMgMTA0IDE5MC4zODUgMTEzLjkgMTk2LjU2OCAxMjhIMjQwVjU2QzI0MCAyNSAyMTUgMCAxODQgMFpNNTEyIDMwNEM1MTIgMjcyIDQ5MyAyNDUgNDY2IDIzMkM0NzUgMjIxIDQ4MCAyMDcgNDgwIDE5MkM0ODAgMTYxIDQ1OCAxMzYgNDI5IDEzMEM0MzEgMTI0IDQzMiAxMTggNDMyIDExMkM0MzIgODIgNDExIDU3IDM4MyA1MEMzODAgMjIgMzU3IDAgMzI4IDBDMjk3IDAgMjcyIDI1IDI3MiA1NlYyNDBIMzIwQzMyOC44MjggMjQwIDMzNiAyMzIuODI4IDMzNiAyMjRWMTgwLjU2OEMzMjEuOSAxNzQuMzg1IDMxMiAxNjAuMzgzIDMxMiAxNDRDMzEyIDEyMS45MDggMzI5LjkwOCAxMDQgMzUyIDEwNFMzOTIgMTIxLjkwOCAzOTIgMTQ0QzM5MiAxNjAuMzgzIDM4Mi4xIDE3NC4zODUgMzY4IDE4MC41NjhWMjI0QzM2OCAyNTAuNDY5IDM0Ni40NjkgMjcyIDMyMCAyNzJIMjcyVjM1MkgzMTUuNDMyQzMyMS42MTUgMzM3LjkgMzM1LjYxNyAzMjggMzUyIDMyOEMzNzQuMDkyIDMyOCAzOTIgMzQ1LjkwOCAzOTIgMzY4UzM3NC4wOTIgNDA4IDM1MiA0MDhDMzM1LjYxNyA0MDggMzIxLjYxNSAzOTguMSAzMTUuNDMyIDM4NEgyNzJWNDU2QzI3MiA0ODcgMjk3IDUxMiAzMjggNTEyQzM1NyA1MTIgMzgxIDQ5MCAzODMgNDYyQzM4OSA0NjMgMzk0IDQ2NCA0MDAgNDY0QzQzNSA0NjQgNDY0IDQzNSA0NjQgNDAwQzQ2NCAzOTIgNDYyIDM4NSA0NjAgMzc5QzQ5MCAzNjcgNTEyIDMzOCA1MTIgMzA0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNTIgMzI4QzMzNS42MTcgMzI4IDMyMS42MTUgMzM3LjkgMzE1LjQzMiAzNTJIMjcyVjI3MkgzMjBDMzQ2LjQ2OSAyNzIgMzY4IDI1MC40NjkgMzY4IDIyNFYxODAuNTY4QzM4Mi4xIDE3NC4zODUgMzkyIDE2MC4zODMgMzkyIDE0NEMzOTIgMTIxLjkwOCAzNzQuMDkyIDEwNCAzNTIgMTA0UzMxMiAxMjEuOTA4IDMxMiAxNDRDMzEyIDE2MC4zODMgMzIxLjkgMTc0LjM4NSAzMzYgMTgwLjU2OFYyMjRDMzM2IDIzMi44MjggMzI4LjgyOCAyNDAgMzIwIDI0MEgyNzJWNTZIMjQwVjEyOEgxOTYuNTY4QzE5MC4zODUgMTEzLjkgMTc2LjM4MyAxMDQgMTYwIDEwNEMxMzcuOTA4IDEwNCAxMjAgMTIxLjkwOCAxMjAgMTQ0UzEzNy45MDggMTg0IDE2MCAxODRDMTc2LjM4MyAxODQgMTkwLjM4NSAxNzQuMSAxOTYuNTY4IDE2MEgyNDBWMjQwSDE5MkMxNjUuNTMxIDI0MCAxNDQgMjYxLjUzMSAxNDQgMjg4VjMzMS40MzJDMTI5LjkgMzM3LjYxNSAxMjAgMzUxLjYxNyAxMjAgMzY4QzEyMCAzOTAuMDkyIDEzNy45MDggNDA4IDE2MCA0MDhTMjAwIDM5MC4wOTIgMjAwIDM2OEMyMDAgMzUxLjYxNyAxOTAuMSAzMzcuNjE1IDE3NiAzMzEuNDMyVjI4OEMxNzYgMjc5LjE3MiAxODMuMTcyIDI3MiAxOTIgMjcySDI0MFY0NTZIMjcyVjM4NEgzMTUuNDMyQzMyMS42MTUgMzk4LjEgMzM1LjYxNyA0MDggMzUyIDQwOEMzNzQuMDkyIDQwOCAzOTIgMzkwLjA5MiAzOTIgMzY4UzM3NC4wOTIgMzI4IDM1MiAzMjhaTTM1MiAxMjhDMzYwLjgyMiAxMjggMzY4IDEzNS4xNzggMzY4IDE0NFMzNjAuODIyIDE2MCAzNTIgMTYwUzMzNiAxNTIuODIyIDMzNiAxNDRTMzQzLjE3OCAxMjggMzUyIDEyOFpNMTYwIDE2MEMxNTEuMTc4IDE2MCAxNDQgMTUyLjgyMiAxNDQgMTQ0UzE1MS4xNzggMTI4IDE2MCAxMjhTMTc2IDEzNS4xNzggMTc2IDE0NFMxNjguODIyIDE2MCAxNjAgMTYwWk0xNjAgMzg0QzE1MS4xNzggMzg0IDE0NCAzNzYuODIyIDE0NCAzNjhTMTUxLjE3OCAzNTIgMTYwIDM1MlMxNzYgMzU5LjE3OCAxNzYgMzY4UzE2OC44MjIgMzg0IDE2MCAzODRaTTM1MiAzODRDMzQzLjE3OCAzODQgMzM2IDM3Ni44MjIgMzM2IDM2OFMzNDMuMTc4IDM1MiAzNTIgMzUyUzM2OCAzNTkuMTc4IDM2OCAzNjhTMzYwLjgyMiAzODQgMzUyIDM4NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BrainCircuit(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M184 0C155 0 132 22 129 50C101 57 80 82 80 112C80 118 81 124 83 130C54 136 32 161 32 192C32 207 37 221 46 232C19 245 0 272 0 304C0 338 22 367 52 379C50 385 48 392 48 400C48 435 77 464 112 464C118 464 123 463 129 462C131 490 155 512 184 512C215 512 240 487 240 456V272H192C183.172 272 176 279.172 176 288V331.432C190.1 337.615 200 351.617 200 368C200 390.092 182.092 408 160 408S120 390.092 120 368C120 351.617 129.9 337.615 144 331.432V288C144 261.531 165.531 240 192 240H240V160H196.568C190.385 174.1 176.383 184 160 184C137.908 184 120 166.092 120 144S137.908 104 160 104C176.383 104 190.385 113.9 196.568 128H240V56C240 25 215 0 184 0ZM512 304C512 272 493 245 466 232C475 221 480 207 480 192C480 161 458 136 429 130C431 124 432 118 432 112C432 82 411 57 383 50C380 22 357 0 328 0C297 0 272 25 272 56V240H320C328.828 240 336 232.828 336 224V180.568C321.9 174.385 312 160.383 312 144C312 121.908 329.908 104 352 104S392 121.908 392 144C392 160.383 382.1 174.385 368 180.568V224C368 250.469 346.469 272 320 272H272V352H315.432C321.615 337.9 335.617 328 352 328C374.092 328 392 345.908 392 368S374.092 408 352 408C335.617 408 321.615 398.1 315.432 384H272V456C272 487 297 512 328 512C357 512 381 490 383 462C389 463 394 464 400 464C435 464 464 435 464 400C464 392 462 385 460 379C490 367 512 338 512 304Z" />
            <path d="M352 328C335.617 328 321.615 337.9 315.432 352H272V272H320C346.469 272 368 250.469 368 224V180.568C382.1 174.385 392 160.383 392 144C392 121.908 374.092 104 352 104S312 121.908 312 144C312 160.383 321.9 174.385 336 180.568V224C336 232.828 328.828 240 320 240H272V56H240V128H196.568C190.385 113.9 176.383 104 160 104C137.908 104 120 121.908 120 144S137.908 184 160 184C176.383 184 190.385 174.1 196.568 160H240V240H192C165.531 240 144 261.531 144 288V331.432C129.9 337.615 120 351.617 120 368C120 390.092 137.908 408 160 408S200 390.092 200 368C200 351.617 190.1 337.615 176 331.432V288C176 279.172 183.172 272 192 272H240V456H272V384H315.432C321.615 398.1 335.617 408 352 408C374.092 408 392 390.092 392 368S374.092 328 352 328ZM352 128C360.822 128 368 135.178 368 144S360.822 160 352 160S336 152.822 336 144S343.178 128 352 128ZM160 160C151.178 160 144 152.822 144 144S151.178 128 160 128S176 135.178 176 144S168.822 160 160 160ZM160 384C151.178 384 144 376.822 144 368S151.178 352 160 352S176 359.178 176 368S168.822 384 160 384ZM352 384C343.178 384 336 376.822 336 368S343.178 352 352 352S368 359.178 368 368S360.822 384 352 384Z" />
        </Icon>
    </>
}