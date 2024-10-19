
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-dots` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-dots?s=thin message-dots}
 * @preview ![message-dots](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMTc1Ljk4NkMxMTAuMzI4IDE3NS45ODYgOTYgMTkwLjMxMSA5NiAyMDcuOTgzUzExMC4zMjggMjM5Ljk4MSAxMjggMjM5Ljk4MVMxNjAgMjI1LjY1NiAxNjAgMjA3Ljk4M1MxNDUuNjcyIDE3NS45ODYgMTI4IDE3NS45ODZaTTEyOCAyMjMuOTgyQzExOS4xNzYgMjIzLjk4MiAxMTIgMjE2LjgwNSAxMTIgMjA3Ljk4M1MxMTkuMTc2IDE5MS45ODUgMTI4IDE5MS45ODVTMTQ0IDE5OS4xNjIgMTQ0IDIwNy45ODNTMTM2LjgyNCAyMjMuOTgyIDEyOCAyMjMuOTgyWk0yNTYgMTc1Ljk4NkMyMzguMzI4IDE3NS45ODYgMjI0IDE5MC4zMTEgMjI0IDIwNy45ODNTMjM4LjMyOCAyMzkuOTgxIDI1NiAyMzkuOTgxUzI4OCAyMjUuNjU2IDI4OCAyMDcuOTgzUzI3My42NzIgMTc1Ljk4NiAyNTYgMTc1Ljk4NlpNMjU2IDIyMy45ODJDMjQ3LjE3NiAyMjMuOTgyIDI0MCAyMTYuODA1IDI0MCAyMDcuOTgzUzI0Ny4xNzYgMTkxLjk4NSAyNTYgMTkxLjk4NVMyNzIgMTk5LjE2MiAyNzIgMjA3Ljk4M1MyNjQuODI0IDIyMy45ODIgMjU2IDIyMy45ODJaTTM4NCAxNzUuOTg2QzM2Ni4zMjggMTc1Ljk4NiAzNTIgMTkwLjMxMSAzNTIgMjA3Ljk4M1MzNjYuMzI4IDIzOS45ODEgMzg0IDIzOS45ODFTNDE2IDIyNS42NTYgNDE2IDIwNy45ODNTNDAxLjY3MiAxNzUuOTg2IDM4NCAxNzUuOTg2Wk0zODQgMjIzLjk4MkMzNzUuMTc2IDIyMy45ODIgMzY4IDIxNi44MDUgMzY4IDIwNy45ODNTMzc1LjE3NiAxOTEuOTg1IDM4NCAxOTEuOTg1UzQwMCAxOTkuMTYyIDQwMCAyMDcuOTgzUzM5Mi44MjQgMjIzLjk4MiAzODQgMjIzLjk4MlpNNDQ4IDBINjRDMjguNzUgMCAwIDI4Ljc0OCAwIDYzLjk5NVYzNTEuOTcyQzAgMzg3LjIxOSAyOC43NSA0MTUuOTY3IDY0IDQxNS45NjdIMTYwVjQ5OS45NkMxNjAgNTA3LjAzMiAxNjUuOTIgNTEyIDE3Mi4xNzggNTEyQzE3NC41NDcgNTEyIDE3Ni45NjMgNTExLjI4NyAxNzkuMTI1IDUwOS43MDlMMzA0IDQxNS45NjdINDQ4QzQ4My4yNSA0MTUuOTY3IDUxMiAzODcuMjE5IDUxMiAzNTEuOTcyVjYzLjk5NUM1MTIgMjguNzQ4IDQ4My4yNSAwIDQ0OCAwWk00OTYgMzUxLjk3MkM0OTYgMzc4LjQzNiA0NzQuNDY3IDM5OS45NjggNDQ4IDM5OS45NjhIMjk4LjY2MkwyOTQuMzk1IDQwMy4xNzNMMTc2IDQ5Mi4wNTJWMzk5Ljk2OEg2NEMzNy41MzMgMzk5Ljk2OCAxNiAzNzguNDM2IDE2IDM1MS45NzJWNjMuOTk1QzE2IDM3LjUzIDM3LjUzMyAxNS45OTkgNjQgMTUuOTk5SDQ0OEM0NzQuNDY3IDE1Ljk5OSA0OTYgMzcuNTMgNDk2IDYzLjk5NVYzNTEuOTcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageDots(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M128 175.986C110.328 175.986 96 190.311 96 207.983S110.328 239.981 128 239.981S160 225.656 160 207.983S145.672 175.986 128 175.986ZM128 223.982C119.176 223.982 112 216.805 112 207.983S119.176 191.985 128 191.985S144 199.162 144 207.983S136.824 223.982 128 223.982ZM256 175.986C238.328 175.986 224 190.311 224 207.983S238.328 239.981 256 239.981S288 225.656 288 207.983S273.672 175.986 256 175.986ZM256 223.982C247.176 223.982 240 216.805 240 207.983S247.176 191.985 256 191.985S272 199.162 272 207.983S264.824 223.982 256 223.982ZM384 175.986C366.328 175.986 352 190.311 352 207.983S366.328 239.981 384 239.981S416 225.656 416 207.983S401.672 175.986 384 175.986ZM384 223.982C375.176 223.982 368 216.805 368 207.983S375.176 191.985 384 191.985S400 199.162 400 207.983S392.824 223.982 384 223.982ZM448 0H64C28.75 0 0 28.748 0 63.995V351.972C0 387.219 28.75 415.967 64 415.967H160V499.96C160 507.032 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.972V63.995C512 28.748 483.25 0 448 0ZM496 351.972C496 378.436 474.467 399.968 448 399.968H298.662L294.395 403.173L176 492.052V399.968H64C37.533 399.968 16 378.436 16 351.972V63.995C16 37.53 37.533 15.999 64 15.999H448C474.467 15.999 496 37.53 496 63.995V351.972Z" />
        </Icon>
    </>
}