
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `presentation-screen` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=solid presentation-screen}
 * @preview ![presentation-screen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDMuOTk4IDBIMzEuOTk4QzE0LjMyNiAwIDAgMTQuMzI2IDAgMzEuOTk4VjMyLjAwOEMwIDQ5LjY4IDE0LjMyNyA2NC4wMDcgMzIgNjQuMDA3SDMyVjMyMC4wMzZDMzIgMzM3LjYzOCA0Ni40MDIgMzUyLjA0IDY0LjAwNCAzNTIuMDRIMjU2VjM4Ni43OTRMMTgwLjc1IDQ2Mi4wNTNDMTc0LjQ5NCA0NjguMzEgMTc0LjQ5NCA0NzguNTQ4IDE4MC43NSA0ODQuODA1TDIwMy4yNSA1MDcuMzA3QzIwOS41MDYgNTEzLjU2NCAyMTkuNzQ0IDUxMy41NjQgMjI2IDUwNy4zMDdMMjg4IDQ0NS4zTDM1MCA1MDcuMzA3QzM1Ni4yNTYgNTEzLjU2NCAzNjYuNDk0IDUxMy41NjQgMzcyLjc1IDUwNy4zMDdMMzk1LjI1IDQ4NC44MDVDNDAxLjUwNiA0NzguNTQ4IDQwMS41MDYgNDY4LjMxIDM5NS4yNSA0NjIuMDUzTDMyMCAzODYuNzk0VjM1Mi4wNEg1MTJDNTI5LjYgMzUyLjA0IDU0NCAzMzcuNjQgNTQ0IDMyMC4wNFY2NC4wMDdINTQ0QzU2MS42NzMgNjQuMDA3IDU3NiA0OS42OCA1NzYgMzIuMDA4VjMyLjAwMkM1NzYgMTQuMzI4IDU2MS42NzIgMCA1NDMuOTk4IDBaTTQ4MCAyODguMDMzSDk2VjY0LjAwN0g0ODBWMjg4LjAzM1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PresentationScreen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M543.998 0H31.998C14.326 0 0 14.326 0 31.998V32.008C0 49.68 14.327 64.007 32 64.007H32V320.036C32 337.638 46.402 352.04 64.004 352.04H256V386.794L180.75 462.053C174.494 468.31 174.494 478.548 180.75 484.805L203.25 507.307C209.506 513.564 219.744 513.564 226 507.307L288 445.3L350 507.307C356.256 513.564 366.494 513.564 372.75 507.307L395.25 484.805C401.506 478.548 401.506 468.31 395.25 462.053L320 386.794V352.04H512C529.6 352.04 544 337.64 544 320.04V64.007H544C561.673 64.007 576 49.68 576 32.008V32.002C576 14.328 561.672 0 543.998 0ZM480 288.033H96V64.007H480V288.033Z" />
        </Icon>
    </>
}