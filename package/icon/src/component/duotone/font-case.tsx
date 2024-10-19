
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `font-case` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/font-case?s=duotone font-case}
 * @preview ![font-case](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYwMCAxNjBDNTg3Ljc1OCAxNjAgNTc3LjE5NSAxNjUuODA3IDU2OS44NTkgMTc0LjQ2N0M1NTIuNCAxNjUuNTI3IDUzMi45MjYgMTYwIDUxMiAxNjBDNDQxLjQyMiAxNjAgMzg0IDIxNy40MDYgMzg0IDI4OFYzNTJDMzg0IDQyMi41OTQgNDQxLjQyMiA0ODAgNTEyIDQ4MEM1MzIuOTI2IDQ4MCA1NTIuNCA0NzQuNDczIDU2OS44NTkgNDY1LjUzM0M1NzcuMTk1IDQ3NC4xOTMgNTg3Ljc1OCA0ODAgNjAwIDQ4MEM2MjIuMDk0IDQ4MCA2NDAgNDYyLjA5NCA2NDAgNDQwVjIwMEM2NDAgMTc3LjkwNiA2MjIuMDk0IDE2MCA2MDAgMTYwWk01MTIgNDAwQzQ4NS41MzEgNDAwIDQ2NCAzNzguNDY5IDQ2NCAzNTJWMjg4QzQ2NCAyNjEuNTMxIDQ4NS41MzEgMjQwIDUxMiAyNDBTNTYwIDI2MS41MzEgNTYwIDI4OFYzNTJDNTYwIDM3OC40NjkgNTM4LjQ2OSA0MDAgNTEyIDQwMFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzQ5LjUwNyA0MjYuMTA5TDIxMy41MTMgNTguMTIzQzIwNy43MTYgNDIuNDM4IDE5Mi43NDkgMzIgMTc1Ljk5OSAzMlMxNDQuMjgzIDQyLjQzOCAxMzguNDg2IDU4LjEyM0wyLjQ5MiA0MjYuMTA5Qy01LjE2NSA0NDYuODI2IDUuNDEzIDQ2OS44NTcgMjYuMTQ2IDQ3Ny41MTRDNDYuODE4IDQ4NS4xNyA2OS44NjMgNDc0LjU0NSA3Ny41MTkgNDUzLjg1N0wxMDMuMzM5IDM4My45ODZIMjQ4LjY2TDI3NC40OCA0NTMuODU3QzI4MC40NDkgNDY5Ljk4MiAyOTUuNzMgNDc5Ljk4MiAzMTEuOTk0IDQ3OS45ODJDMzE2LjYwMyA0NzkuOTgyIDMyMS4yOSA0NzkuMjAxIDMyNS44NTMgNDc3LjUxNEMzNDYuNTg1IDQ2OS44NTcgMzU3LjE2MyA0NDYuODI2IDM0OS41MDcgNDI2LjEwOVpNMTMyLjkwNCAzMDMuOTg4TDE3NS45OTkgMTg3LjM2OUwyMTkuMDk1IDMwMy45ODhIMTMyLjkwNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function FontCase(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M600 160C587.758 160 577.195 165.807 569.859 174.467C552.4 165.527 532.926 160 512 160C441.422 160 384 217.406 384 288V352C384 422.594 441.422 480 512 480C532.926 480 552.4 474.473 569.859 465.533C577.195 474.193 587.758 480 600 480C622.094 480 640 462.094 640 440V200C640 177.906 622.094 160 600 160ZM512 400C485.531 400 464 378.469 464 352V288C464 261.531 485.531 240 512 240S560 261.531 560 288V352C560 378.469 538.469 400 512 400Z" />
            <path d="M349.507 426.109L213.513 58.123C207.716 42.438 192.749 32 175.999 32S144.283 42.438 138.486 58.123L2.492 426.109C-5.165 446.826 5.413 469.857 26.146 477.514C46.818 485.17 69.863 474.545 77.519 453.857L103.339 383.986H248.66L274.48 453.857C280.449 469.982 295.73 479.982 311.994 479.982C316.603 479.982 321.29 479.201 325.853 477.514C346.585 469.857 357.163 446.826 349.507 426.109ZM132.904 303.988L175.999 187.369L219.095 303.988H132.904Z" />
        </Icon>
    </>
}