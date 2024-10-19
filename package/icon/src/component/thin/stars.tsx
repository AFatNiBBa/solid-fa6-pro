
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stars` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stars?s=thin stars}
 * @preview ![stars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjQuMjAzIDI2Ny4yOTNMMjU5LjQ3MSAyNTIuMDQzTDIxMi42MDMgMTU2Ljc5N0MyMDguNDEgMTQ4LjI4MSAyMDAuMjAxIDE0NCAxOTEuOTg0IDE0NEMxODMuNzk3IDE0NCAxNzUuNjAzIDE0OC4yNDggMTcxLjM2MSAxNTYuNzk3TDEyNC40OTQgMjUyLjA0M0wxOS43NjQgMjY3LjI5M0MwLjg5MSAyNzAuMDQxIC02LjczMiAyOTMuMjkxIDcuMDE2IDMwNi41NDFMODIuODc3IDM4MC41MzdMNjQuODgxIDQ4NS4xNThDNjIuNDE0IDUwMC4wNTkgNzQuMjgxIDUxMiA4Ny41NjQgNTEyQzkxLjEwNyA1MTIgOTQuNzUgNTExLjE1MiA5OC4yNSA1MDkuMjgzTDE5MS45ODIgNDU5LjkxTDI4NS43MTcgNTA5LjI4M0MyODkuMDY4IDUxMS4wNjYgMjkyLjcyNiA1MTEuOTM5IDI5Ni4zNzMgNTExLjkzOUMzMDEuMTU2IDUxMS45MzkgMzA1LjkyIDUxMC40MzkgMzA5Ljk2MyA1MDcuNTMzQzMxNi45NjEgNTAyLjQwOCAzMjAuNTg2IDQ5My42NTggMzE5LjA4NiA0ODUuMTU4TDMwMS4yMTMgMzgwLjUzN0wzNzcuMDc2IDMwNi41NDFDMzkwLjY5NyAyOTMuMjkxIDM4My4wNzQgMjcwLjA0MSAzNjQuMjAzIDI2Ny4yOTNaTTM2NS45MDQgMjk1LjA4NkwyODQuMDI3IDM3NC45NTFMMzAzLjMzIDQ4Ny45MzlDMzA0LjI2NiA0OTMuMjQ0IDI5OC4zNzcgNDk3Ljg5NiAyOTMuMTc0IDQ5NS4xMjdMMTkxLjk4MiA0NDEuODI2TDkwLjcxMyA0OTUuMTY4Qzg1LjU0NSA0OTcuOTI4IDc5Ljc1IDQ5My4zMDEgODAuNjQ4IDQ4Ny44NzFMMTAwLjA3MiAzNzQuOTU5TDE4LjExOSAyOTUuMDJDMTMuODk2IDI5MC45NTEgMTYuMzk0IDI4My45NTEgMjIuMDY4IDI4My4xMjVMMTM1LjEzMyAyNjYuNjYyTDE4NS42OTMgMTYzLjkwOEMxODcuMzgxIDE2MC41MDggMTkwLjM1OSAxNjAgMTkxLjk4NCAxNjBMMTk4LjI0OCAxNjMuODU5TDI0OC44MzIgMjY2LjY2MkwzNjEuODk2IDI4My4xMjVDMzY3LjYwMSAyODMuOTU3IDM3MC4wOTYgMjkxLjAxIDM2NS45MDQgMjk1LjA4NlpNMjY0IDg4SDMyOFYxNTJDMzI4IDE1Ni40MDYgMzMxLjU5NCAxNjAgMzM2IDE2MFMzNDQgMTU2LjQwNiAzNDQgMTUyVjg4SDQwOEM0MTIuNDA2IDg4IDQxNiA4NC40MDYgNDE2IDgwUzQxMi40MDYgNzIgNDA4IDcySDM0NFY4QzM0NCAzLjU5NCAzNDAuNDA2IDAgMzM2IDBTMzI4IDMuNTk0IDMyOCA4VjcySDI2NEMyNTkuNTk0IDcyIDI1NiA3NS41OTQgMjU2IDgwUzI1OS41OTQgODggMjY0IDg4Wk01MDQgMjE2SDQ1NlYxNjhDNDU2IDE2My41OTQgNDUyLjQwNiAxNjAgNDQ4IDE2MFM0NDAgMTYzLjU5NCA0NDAgMTY4VjIxNkgzOTJDMzg3LjU5NCAyMTYgMzg0IDIxOS41OTQgMzg0IDIyNFMzODcuNTk0IDIzMiAzOTIgMjMySDQ0MFYyODBDNDQwIDI4NC40MDYgNDQzLjU5NCAyODggNDQ4IDI4OFM0NTYgMjg0LjQwNiA0NTYgMjgwVjIzMkg1MDRDNTA4LjQwNiAyMzIgNTEyIDIyOC40MDYgNTEyIDIyNFM1MDguNDA2IDIxNiA1MDQgMjE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Stars(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M364.203 267.293L259.471 252.043L212.603 156.797C208.41 148.281 200.201 144 191.984 144C183.797 144 175.603 148.248 171.361 156.797L124.494 252.043L19.764 267.293C0.891 270.041 -6.732 293.291 7.016 306.541L82.877 380.537L64.881 485.158C62.414 500.059 74.281 512 87.564 512C91.107 512 94.75 511.152 98.25 509.283L191.982 459.91L285.717 509.283C289.068 511.066 292.726 511.939 296.373 511.939C301.156 511.939 305.92 510.439 309.963 507.533C316.961 502.408 320.586 493.658 319.086 485.158L301.213 380.537L377.076 306.541C390.697 293.291 383.074 270.041 364.203 267.293ZM365.904 295.086L284.027 374.951L303.33 487.939C304.266 493.244 298.377 497.896 293.174 495.127L191.982 441.826L90.713 495.168C85.545 497.928 79.75 493.301 80.648 487.871L100.072 374.959L18.119 295.02C13.896 290.951 16.394 283.951 22.068 283.125L135.133 266.662L185.693 163.908C187.381 160.508 190.359 160 191.984 160L198.248 163.859L248.832 266.662L361.896 283.125C367.601 283.957 370.096 291.01 365.904 295.086ZM264 88H328V152C328 156.406 331.594 160 336 160S344 156.406 344 152V88H408C412.406 88 416 84.406 416 80S412.406 72 408 72H344V8C344 3.594 340.406 0 336 0S328 3.594 328 8V72H264C259.594 72 256 75.594 256 80S259.594 88 264 88ZM504 216H456V168C456 163.594 452.406 160 448 160S440 163.594 440 168V216H392C387.594 216 384 219.594 384 224S387.594 232 392 232H440V280C440 284.406 443.594 288 448 288S456 284.406 456 280V232H504C508.406 232 512 228.406 512 224S508.406 216 504 216Z" />
        </Icon>
    </>
}