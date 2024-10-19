
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `utensils` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/utensils?s=regular utensils}
 * @preview ![utensils](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzUuOTA2IDBDNDAyLjY4OCAwIDM1MS4yODEgMzQuMDE2IDMyMi44MTIgOTAuOTM4QzMwMi40MDYgMTMxLjc2NiAyNzkuNjg4IDIxNS41OTQgMzU2LjgxMiAzMTguNDA2QzM2NC43MTkgMzI5IDM3OS44MTIgMzMxLjE3MiAzOTAuNDA2IDMyMy4yMDNDNDAxIDMxNS4yNSA0MDMuMTU2IDMwMC4yMDMgMzk1LjE4OCAyODkuNTk0QzMzNi42NTYgMjExLjU0NyAzNDYuODc1IDE1MC4xNTYgMzY1Ljc1IDExMi40MDZDMzg1Ljg0NCA3Mi4yNjYgNDE4LjEyNSA1Mi4yMTkgNDMyIDQ4LjU5NFY0ODhDNDMyIDUwMS4yNSA0NDIuNzUgNTEyIDQ1NiA1MTJTNDgwIDUwMS4yNSA0ODAgNDg4VjQ2LjVDNDgwIDIwLjg1OSA0NjAuMjE5IDAgNDM1LjkwNiAwWk0xMTIgMTYwQzEyNS4yNSAxNjAgMTM2IDE0OS4yNSAxMzYgMTM2VjI0QzEzNiAxMC43NSAxMjUuMjUgMCAxMTIgMFM4OCAxMC43NSA4OCAyNFYxMzZDODggMTQ5LjI1IDk4Ljc1IDE2MCAxMTIgMTYwWk0xNzYgMTYwQzE4OS4yNSAxNjAgMjAwIDE0OS4yNSAyMDAgMTM2VjI0QzIwMCAxMC43NSAxODkuMjUgMCAxNzYgMFMxNTIgMTAuNzUgMTUyIDI0VjEzNkMxNTIgMTQ5LjI1IDE2Mi43NSAxNjAgMTc2IDE2MFpNMjQ4IDBDMjM0Ljc1IDAgMjI0IDEwLjc1IDIyNCAyNFYxNjhDMjI0IDE5MC4wNjIgMjA2LjA2MiAyMDggMTg0IDIwOEgxNzYuMjVDMTY5Ljc1IDIwOCAxNjMuNTMxIDIxMC42MjUgMTU5LjAzMSAyMTUuMjgxQzE1NC41IDIxOS45NTMgMTUyLjA2MiAyMjYuMjM0IDE1Mi4yNSAyMzIuNzE5TDE1OS4yNSA0NjRIMTI4Ljc1TDEzNS43NSAyMzIuNzE5QzEzNS45MzggMjI2LjIzNCAxMzMuNSAyMTkuOTUzIDEyOC45NjkgMjE1LjI4MUMxMjQuNDY5IDIxMC42MjUgMTE4LjI1IDIwOCAxMTEuNzUgMjA4SDEwNEM4MS45MzggMjA4IDY0IDE5MC4wNjIgNjQgMTY4VjI0QzY0IDEwLjc1IDUzLjI1IDAgNDAgMFMxNiAxMC43NSAxNiAyNFYxNjhDMTYgMjEwLjczNCA0Ni42MjUgMjQ2LjQ1MyA4Ny4wNjIgMjU0LjM1OUw4MC41IDQ3MC43NjZDODAuMTg4IDQ4MS41MTYgODQuMjgxIDQ5Mi4xMDkgOTEuNzgxIDQ5OS44MjhDOTkuMjUgNTA3LjU2MiAxMDkuNzE5IDUxMiAxMjAuNSA1MTJIMTY3LjVDMTc4LjI4MSA1MTIgMTg4Ljc1IDUwNy41NjIgMTk2LjIxOSA0OTkuODI4QzIwMy43MTkgNDkyLjEwOSAyMDcuODEyIDQ4MS41MTYgMjA3LjUgNDcwLjc5N0wyMDAuOTM4IDI1NC4zNTlDMjQxLjM3NSAyNDYuNDUzIDI3MiAyMTAuNzM0IDI3MiAxNjhWMjRDMjcyIDEwLjc1IDI2MS4yNSAwIDI0OCAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Utensils(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M435.906 0C402.688 0 351.281 34.016 322.812 90.938C302.406 131.766 279.688 215.594 356.812 318.406C364.719 329 379.812 331.172 390.406 323.203C401 315.25 403.156 300.203 395.188 289.594C336.656 211.547 346.875 150.156 365.75 112.406C385.844 72.266 418.125 52.219 432 48.594V488C432 501.25 442.75 512 456 512S480 501.25 480 488V46.5C480 20.859 460.219 0 435.906 0ZM112 160C125.25 160 136 149.25 136 136V24C136 10.75 125.25 0 112 0S88 10.75 88 24V136C88 149.25 98.75 160 112 160ZM176 160C189.25 160 200 149.25 200 136V24C200 10.75 189.25 0 176 0S152 10.75 152 24V136C152 149.25 162.75 160 176 160ZM248 0C234.75 0 224 10.75 224 24V168C224 190.062 206.062 208 184 208H176.25C169.75 208 163.531 210.625 159.031 215.281C154.5 219.953 152.062 226.234 152.25 232.719L159.25 464H128.75L135.75 232.719C135.938 226.234 133.5 219.953 128.969 215.281C124.469 210.625 118.25 208 111.75 208H104C81.938 208 64 190.062 64 168V24C64 10.75 53.25 0 40 0S16 10.75 16 24V168C16 210.734 46.625 246.453 87.062 254.359L80.5 470.766C80.188 481.516 84.281 492.109 91.781 499.828C99.25 507.562 109.719 512 120.5 512H167.5C178.281 512 188.75 507.562 196.219 499.828C203.719 492.109 207.812 481.516 207.5 470.797L200.938 254.359C241.375 246.453 272 210.734 272 168V24C272 10.75 261.25 0 248 0Z" />
        </Icon>
    </>
}