
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `heart` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heart?s=solid heart}
 * @preview ![heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzIuMDk2IDI3MC40ODZMMjc4Ljk0NiA0NzAuMTk2QzI2Ni4zMDQgNDgzLjI2OCAyNDUuNjE2IDQ4My4yNjggMjMyLjk3NCA0NzAuMTk2TDM5LjgyNCAyNzAuNDg2Qy0xNi4xOTcgMjEyLjUxNyAtMTMuMTA0IDExNi42NTMgNDkuMDQxIDYyLjg2MkMxMDMuMzE2IDE1Ljg4NCAxODYuMzcxIDI0LjM1OSAyMzYuMzIgNzUuOTI1TDI1Ni4wMDcgOTYuMjQ5TDI3NS42OTQgNzUuOTI1QzMyNS42NDEgMjQuMzYgNDA4LjY5NCAxNS44ODQgNDYyLjk2OSA2Mi44NTlDNTI1LjExOCAxMTYuNjQ5IDUyOC4yMTIgMjEyLjUxNSA0NzIuMDk2IDI3MC40ODZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Heart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M472.096 270.486L278.946 470.196C266.304 483.268 245.616 483.268 232.974 470.196L39.824 270.486C-16.197 212.517 -13.104 116.653 49.041 62.862C103.316 15.884 186.371 24.359 236.32 75.925L256.007 96.249L275.694 75.925C325.641 24.36 408.694 15.884 462.969 62.859C525.118 116.649 528.212 212.515 472.096 270.486Z" />
        </Icon>
    </>
}