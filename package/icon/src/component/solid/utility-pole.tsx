
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `utility-pole` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/utility-pole?s=solid utility-pole}
 * @preview ![utility-pole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODggMzJMNDg4IDMyQzQ3NC43NDUgMzIgNDY0IDQyLjc0NSA0NjQgNTZWNjRINDMyVjU2QzQzMiA0Mi43NDUgNDIxLjI1NSAzMiA0MDggMzJINDA4QzM5NC43NDUgMzIgMzg0IDQyLjc0NSAzODQgNTZWNjRIMjg4VjE2QzI4OCA3LjE2MyAyODAuODM3IDAgMjcyIDBIMjQwQzIzMS4xNjMgMCAyMjQgNy4xNjMgMjI0IDE2VjY0SDEyOFY1NkMxMjggNDIuNzQ1IDExNy4yNTUgMzIgMTA0IDMySDEwNEM5MC43NDUgMzIgODAgNDIuNzQ1IDgwIDU2VjY0SDQ4VjU2QzQ4IDQyLjc0NSAzNy4yNTUgMzIgMjQgMzJIMjRDMTAuNzQ1IDMyIDAgNDIuNzQ1IDAgNTZWOTZDMCAxMTMuNjczIDE0LjMyNyAxMjggMzIgMTI4SDgzLjE1NkwyMjQgMjIxLjg5NlY1MTJIMjg4VjIyMS44OTZMNDI4Ljg0NCAxMjhINDgwQzQ5Ny42NzMgMTI4IDUxMiAxMTMuNjczIDUxMiA5NlY1NkM1MTIgNDIuNzQ1IDUwMS4yNTUgMzIgNDg4IDMyWk0xNDAuODQ0IDEyOEgyMjRWMTgzLjQzOEwxNDAuODQ0IDEyOFpNMjg4IDEyOEgzNzEuMTU2TDI4OCAxODMuNDM4VjEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UtilityPole(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M488 32L488 32C474.745 32 464 42.745 464 56V64H432V56C432 42.745 421.255 32 408 32H408C394.745 32 384 42.745 384 56V64H288V16C288 7.163 280.837 0 272 0H240C231.163 0 224 7.163 224 16V64H128V56C128 42.745 117.255 32 104 32H104C90.745 32 80 42.745 80 56V64H48V56C48 42.745 37.255 32 24 32H24C10.745 32 0 42.745 0 56V96C0 113.673 14.327 128 32 128H83.156L224 221.896V512H288V221.896L428.844 128H480C497.673 128 512 113.673 512 96V56C512 42.745 501.255 32 488 32ZM140.844 128H224V183.438L140.844 128ZM288 128H371.156L288 183.438V128Z" />
        </Icon>
    </>
}