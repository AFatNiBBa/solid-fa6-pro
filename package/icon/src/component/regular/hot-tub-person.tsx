
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hot-tub-person` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hot-tub-person?s=regular hot-tub-person}
 * @preview ![hot-tub-person](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAuODYxIDE3Ny42MjVDMzIxLjg2MSAxODUuODc1IDMyOC40ODYgMTkyIDMzNi4yMzYgMTkySDM1Mi4xMTFDMzYxLjQ4NiAxOTIgMzY4Ljk4NiAxODMuMzc1IDM2Ny44NjEgMTczLjYyNUMzNjMuNjExIDEzNC41IDM0NS44NjEgOTkuMTI1IDMxOC42MTEgNzYuNUMzMDEuNDg2IDYyLjM3NSAyOTAuMjM2IDM5Ljc1IDI4Ny4xMTEgMTQuMzc1QzI4Ni4xMTEgNi4xMjUgMjc5LjQ4NiAwIDI3MS42MTEgMEgyNTUuODYxQzI0Ni40ODYgMCAyMzguOTg2IDguNSAyNDAuMTExIDE4LjM3NUMyNDQuMzYxIDU3LjUgMjYyLjExMSA5Mi44NzUgMjg5LjM2MSAxMTUuNUMzMDYuNDg2IDEyOS42MjUgMzE3LjczNiAxNTIuMjUgMzIwLjg2MSAxNzcuNjI1Wk00MTYuODYxIDE3Ny42MjVDNDE3Ljg2MSAxODUuODc1IDQyNC40ODYgMTkyIDQzMi4yMzYgMTkySDQ0OC4xMTFDNDU3LjQ4NiAxOTIgNDY0Ljk4NiAxODMuMzc1IDQ2My44NjEgMTczLjYyNUM0NTkuNjExIDEzNC41IDQ0MS44NjEgOTkuMTI1IDQxNC42MTEgNzYuNUMzOTcuNDg2IDYyLjM3NSAzODYuMjM2IDM5Ljc1IDM4My4xMTEgMTQuMzc1QzM4Mi4xMTEgNi4xMjUgMzc1LjQ4NiAwIDM2Ny42MTEgMEgzNTEuODYxQzM0Mi40ODYgMCAzMzQuOTg2IDguNSAzMzYuMTExIDE4LjM3NUMzNDAuMzYxIDU3LjUgMzU4LjExMSA5Mi44NzUgMzg1LjM2MSAxMTUuNUM0MDIuNDg2IDEyOS42MjUgNDEzLjczNiAxNTIuMjUgNDE2Ljg2MSAxNzcuNjI1Wk00ODAgMjU2SDI2MS4zNzVMMTUwLjUgMTcyLjc1QzEzOS4zNzUgMTY0LjUgMTI1Ljg3NSAxNjAgMTEyIDE2MEg2NEMyOC42MjUgMTYwIDAgMTg4LjYyNSAwIDIyNFY0NDhDMCA0ODMuMzc1IDI4LjYyNSA1MTIgNjQgNTEySDQ0OEM0ODMuMzc1IDUxMiA1MTIgNDgzLjM3NSA1MTIgNDQ4VjI4OEM1MTIgMjcwLjM3NSA0OTcuNjI1IDI1NiA0ODAgMjU2Wk00OCAyMjRDNDggMjE1LjEyNSA1NS4xMjUgMjA4IDY0IDIwOEgxMTJDMTE1LjUgMjA4IDExOC44NzUgMjA5LjEyNSAxMjEuNjI1IDIxMS4yNUwxODEuMzc1IDI1Nkg0OFYyMjRaTTExMiA0NjRINjRDNTUuMTI1IDQ2NCA0OCA0NTYuODc1IDQ4IDQ0OFYzMDRIMTEyVjQ2NFpNMjMyIDQ2NEgxNjBWMzA0SDIzMlY0NjRaTTM1MiA0NjRIMjgwVjMwNEgzNTJWNDY0Wk00NjQgNDQ4QzQ2NCA0NTYuODc1IDQ1Ni44NzUgNDY0IDQ0OCA0NjRINDAwVjMwNEg0NjRWNDQ4Wk02NCAxMjhDOTkuMzQ2IDEyOCAxMjggOTkuMzQ2IDEyOCA2NEMxMjggMjguNjUyIDk5LjM0NiAwIDY0IDBTMCAyOC42NTIgMCA2NEMwIDk5LjM0NiAyOC42NTQgMTI4IDY0IDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HotTubPerson(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M320.861 177.625C321.861 185.875 328.486 192 336.236 192H352.111C361.486 192 368.986 183.375 367.861 173.625C363.611 134.5 345.861 99.125 318.611 76.5C301.486 62.375 290.236 39.75 287.111 14.375C286.111 6.125 279.486 0 271.611 0H255.861C246.486 0 238.986 8.5 240.111 18.375C244.361 57.5 262.111 92.875 289.361 115.5C306.486 129.625 317.736 152.25 320.861 177.625ZM416.861 177.625C417.861 185.875 424.486 192 432.236 192H448.111C457.486 192 464.986 183.375 463.861 173.625C459.611 134.5 441.861 99.125 414.611 76.5C397.486 62.375 386.236 39.75 383.111 14.375C382.111 6.125 375.486 0 367.611 0H351.861C342.486 0 334.986 8.5 336.111 18.375C340.361 57.5 358.111 92.875 385.361 115.5C402.486 129.625 413.736 152.25 416.861 177.625ZM480 256H261.375L150.5 172.75C139.375 164.5 125.875 160 112 160H64C28.625 160 0 188.625 0 224V448C0 483.375 28.625 512 64 512H448C483.375 512 512 483.375 512 448V288C512 270.375 497.625 256 480 256ZM48 224C48 215.125 55.125 208 64 208H112C115.5 208 118.875 209.125 121.625 211.25L181.375 256H48V224ZM112 464H64C55.125 464 48 456.875 48 448V304H112V464ZM232 464H160V304H232V464ZM352 464H280V304H352V464ZM464 448C464 456.875 456.875 464 448 464H400V304H464V448ZM64 128C99.346 128 128 99.346 128 64C128 28.652 99.346 0 64 0S0 28.652 0 64C0 99.346 28.654 128 64 128Z" />
        </Icon>
    </>
}