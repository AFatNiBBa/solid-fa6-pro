
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tally-4` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tally-4?s=duotone tally-4}
 * @preview ![tally-4](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDMySDMyQzE0LjMyNyAzMiAwIDQ2LjMyNyAwIDY0VjQ0OEMwIDQ2NS42NzMgMTQuMzI3IDQ4MCAzMiA0ODBIMzJDNDkuNjczIDQ4MCA2NCA0NjUuNjczIDY0IDQ0OFY2NEM2NCA0Ni4zMjcgNDkuNjczIDMyIDMyIDMyWk0xNjAgMzJIMTYwQzE0Mi4zMjcgMzIgMTI4IDQ2LjMyNyAxMjggNjRWNDQ4QzEyOCA0NjUuNjczIDE0Mi4zMjcgNDgwIDE2MCA0ODBIMTYwQzE3Ny42NzMgNDgwIDE5MiA0NjUuNjczIDE5MiA0NDhWNjRDMTkyIDQ2LjMyNyAxNzcuNjczIDMyIDE2MCAzMlpNMjg4IDMySDI4OEMyNzAuMzI3IDMyIDI1NiA0Ni4zMjcgMjU2IDY0VjQ0OEMyNTYgNDY1LjY3MyAyNzAuMzI3IDQ4MCAyODggNDgwSDI4OEMzMDUuNjczIDQ4MCAzMjAgNDY1LjY3MyAzMjAgNDQ4VjY0QzMyMCA0Ni4zMjcgMzA1LjY3MyAzMiAyODggMzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQxNiAzMi4wMDFINDE2QzM5OC4zMjcgMzIuMDAxIDM4NCA0Ni4zMjcgMzg0IDY0LjAwMVY0NDguMDAxQzM4NCA0NjUuNjc0IDM5OC4zMjcgNDgwLjAwMSA0MTYgNDgwLjAwMUg0MTZDNDMzLjY3MyA0ODAuMDAxIDQ0OCA0NjUuNjc0IDQ0OCA0NDguMDAxVjY0LjAwMUM0NDggNDYuMzI3IDQzMy42NzMgMzIuMDAxIDQxNiAzMi4wMDFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Tally_4(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M32 32H32C14.327 32 0 46.327 0 64V448C0 465.673 14.327 480 32 480H32C49.673 480 64 465.673 64 448V64C64 46.327 49.673 32 32 32ZM160 32H160C142.327 32 128 46.327 128 64V448C128 465.673 142.327 480 160 480H160C177.673 480 192 465.673 192 448V64C192 46.327 177.673 32 160 32ZM288 32H288C270.327 32 256 46.327 256 64V448C256 465.673 270.327 480 288 480H288C305.673 480 320 465.673 320 448V64C320 46.327 305.673 32 288 32Z" />
            <path d="M416 32.001H416C398.327 32.001 384 46.327 384 64.001V448.001C384 465.674 398.327 480.001 416 480.001H416C433.673 480.001 448 465.674 448 448.001V64.001C448 46.327 433.673 32.001 416 32.001Z" />
        </Icon>
    </>
}