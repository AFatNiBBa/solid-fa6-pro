
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `messages-dollar` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/messages-dollar?s=regular messages-dollar}
 * @preview ![messages-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTIuNzE1IDE0My41TDIwNy45NjEgMTQyLjEzM0MxODcuNjQ1IDEzNi4xNiAxODguMTI3IDEzMy40IDE4OC43ODMgMTI5LjU3QzE4OS45NjEgMTIyLjg3NSAyMDMuMDA2IDEyMS4yNCAyMTQuNzI1IDEyMy4wMzVDMjE5LjUyIDEyMy43NTggMjI0Ljc4MyAxMjUuNDQ1IDIyOS44MDUgMTI3LjE4OEMyMzguNzExIDEzMC4yNjggMjQ4LjUxNCAxMjUuNTI1IDI1MS42MjEgMTE2LjYwN0MyNTQuNzI5IDEwNy42NiAyNTAuMDAyIDk3Ljg4MyAyNDEuMDU1IDk0Ljc3NUMyMzQuODY3IDkyLjY0NiAyMjkuODE4IDkxLjI4MSAyMjUuMTQ1IDkwLjI1NlY4MS4xNDNDMjI1LjE0NSA3MS42ODggMjE3LjQ3MSA2NCAyMDguMDAyIDY0UzE5MC44NTcgNzEuNjg4IDE5MC44NTcgODEuMTQzVjg5LjcwN0MxNzEuNjM5IDkzLjc5NSAxNTguMTIzIDEwNS43ODUgMTU1LjAwNiAxMjMuNzMyQzE0OC42NTggMTYwLjQ1NSAxODMuNDUxIDE3MC42NiAxOTguMzA1IDE3NS4wMjVMMjAzLjI4NyAxNzYuNDczQzIyOC4zODUgMTgzLjY1IDIyNy45NzEgMTg2LjA2MiAyMjcuMjIxIDE5MC40MjhDMjI2LjA0MSAxOTcuMTI1IDIxMi45OTYgMTk4Ljc4NSAyMDEuMjM4IDE5Ni45NjNDMTk1LjI5MSAxOTYuMDggMTg3LjY4NCAxOTMuMzQ4IDE4MC45NjEgMTkwLjkzN0wxNzcuMTMxIDE4OS41NDVDMTY4LjIxMSAxODYuNDYzIDE1OC40MiAxOTEuMDk4IDE1NS4yNiAyMDAuMDE4QzE1Mi4xMTMgMjA4LjkzOCAxNTYuNzg3IDIxOC43NCAxNjUuNzIxIDIyMS45TDE2OS4zNzcgMjIzLjE4OEMxNzYuMDI1IDIyNS41NzggMTgzLjQxNiAyMjcuOTc5IDE5MC44NTcgMjI5LjYyNVYyMzguODU3QzE5MC44NTcgMjQ4LjMxMiAxOTguNTMzIDI1NiAyMDguMDAyIDI1NlMyMjUuMTQ1IDI0OC4zMTIgMjI1LjE0NSAyMzguODU3VjIzMC4wNjhDMjQ0LjMxMSAyMjUuOTU5IDI1Ny44OTEgMjE0LjE4NyAyNjAuOTk2IDE5Ni4yNjhDMjY3LjQxMiAxNTkuMTcgMjMxLjgyNiAxNDguOTYzIDIxMi43MTUgMTQzLjVaTTU3NiAxMjhINDQ4VjI1NkM0NDggMzA4LjkzOCA0MDQuOTM4IDM1MiAzNTIgMzUySDI1NlYzODMuOTY5QzI1NiA0MTkuMjE1IDI4NC43NSA0NDcuOTYzIDMyMCA0NDcuOTYzSDQ0NS43NUw1MjguNSA1MTAuMDgyQzUzNC44NzUgNTE0LjgzMiA1NDQgNTEwLjIwNyA1NDQgNTAyLjIwOVY0NDcuOTYzSDU3NkM2MTEuMjUgNDQ3Ljk2MyA2NDAgNDE5LjIxNSA2NDAgMzgzLjk2OVYxOTEuOTk0QzY0MCAxNTYuNzQ4IDYxMS4yNSAxMjggNTc2IDEyOFpNNDE2IDI1NlY2NEM0MTYgMjguNzUgMzg3LjI1IDAgMzUyIDBINjRDMjguNzUgMCAwIDI4Ljc1IDAgNjRWMjU2QzAgMjkxLjI1IDI4Ljc1IDMyMCA2NCAzMjBIOTZWMzcyQzk2IDM3OS4xMjUgMTAxLjc1IDM4NCAxMDggMzg0QzExMC4zNzUgMzg0IDExMi44NzUgMzgzLjI1IDExNS4xMjUgMzgxLjYyNUwyMjQgMzIwSDM1MkMzODcuMjUgMzIwIDQxNiAyOTEuMjUgNDE2IDI1NlpNMjExLjM3NSAyNzJMMjAwLjM3NSAyNzguMjVMMTQ0IDMxMC4xMjVWMjcySDY0QzU1LjI1IDI3MiA0OCAyNjQuNzUgNDggMjU2VjY0QzQ4IDU1LjI1IDU1LjI1IDQ4IDY0IDQ4SDM1MkMzNjAuNzUgNDggMzY4IDU1LjI1IDM2OCA2NFYyNTZDMzY4IDI2NC43NSAzNjAuNzUgMjcyIDM1MiAyNzJIMjExLjM3NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MessagesDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M212.715 143.5L207.961 142.133C187.645 136.16 188.127 133.4 188.783 129.57C189.961 122.875 203.006 121.24 214.725 123.035C219.52 123.758 224.783 125.445 229.805 127.188C238.711 130.268 248.514 125.525 251.621 116.607C254.729 107.66 250.002 97.883 241.055 94.775C234.867 92.646 229.818 91.281 225.145 90.256V81.143C225.145 71.688 217.471 64 208.002 64S190.857 71.688 190.857 81.143V89.707C171.639 93.795 158.123 105.785 155.006 123.732C148.658 160.455 183.451 170.66 198.305 175.025L203.287 176.473C228.385 183.65 227.971 186.062 227.221 190.428C226.041 197.125 212.996 198.785 201.238 196.963C195.291 196.08 187.684 193.348 180.961 190.937L177.131 189.545C168.211 186.463 158.42 191.098 155.26 200.018C152.113 208.938 156.787 218.74 165.721 221.9L169.377 223.188C176.025 225.578 183.416 227.979 190.857 229.625V238.857C190.857 248.312 198.533 256 208.002 256S225.145 248.312 225.145 238.857V230.068C244.311 225.959 257.891 214.187 260.996 196.268C267.412 159.17 231.826 148.963 212.715 143.5ZM576 128H448V256C448 308.938 404.938 352 352 352H256V383.969C256 419.215 284.75 447.963 320 447.963H445.75L528.5 510.082C534.875 514.832 544 510.207 544 502.209V447.963H576C611.25 447.963 640 419.215 640 383.969V191.994C640 156.748 611.25 128 576 128ZM416 256V64C416 28.75 387.25 0 352 0H64C28.75 0 0 28.75 0 64V256C0 291.25 28.75 320 64 320H96V372C96 379.125 101.75 384 108 384C110.375 384 112.875 383.25 115.125 381.625L224 320H352C387.25 320 416 291.25 416 256ZM211.375 272L200.375 278.25L144 310.125V272H64C55.25 272 48 264.75 48 256V64C48 55.25 55.25 48 64 48H352C360.75 48 368 55.25 368 64V256C368 264.75 360.75 272 352 272H211.375Z" />
        </Icon>
    </>
}