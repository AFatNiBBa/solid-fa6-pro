
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sim-card` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=regular sim-card}
 * @preview ![sim-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDQgMjQwSDEyMkM5OC44MTIgMjQwIDgwIDI1OC44MTIgODAgMjgyVjMyMEgxNDRWMjQwWk04MCAzOTBDODAgNDEzLjE4OCA5OC44MTIgNDMyIDEyMiA0MzJIMjA4VjM1Mkg4MFYzOTBaTTE3NiAzMjBIMzA0VjI4MkMzMDQgMjU4LjgxMiAyODUuMTg4IDI0MCAyNjIgMjQwSDE3NlYzMjBaTTM3NC42MjcgMTE4LjYyN0wyNjUuMzczIDkuMzczQzI1OS4zNzEgMy4zNzEgMjUxLjIzMiAwIDI0Mi43NDYgMEg2NEMyOC44MDEgMCAwIDI4Ljc5OSAwIDY0VjQ0OEMwIDQ4My4xOTkgMjguODAxIDUxMiA2NCA1MTJIMzIwQzM1NS4xOTkgNTEyIDM4NCA0ODMuMTk5IDM4NCA0NDhWMTQxLjI1NEMzODQgMTMyLjc2OCAzODAuNjI5IDEyNC42MjkgMzc0LjYyNyAxMTguNjI3Wk0zMzYgNDQ4QzMzNiA0NTYuNzUgMzI4Ljc1IDQ2NCAzMjAgNDY0SDY0QzU1LjI1IDQ2NCA0OCA0NTYuNzUgNDggNDQ4VjY0QzQ4IDU1LjI1IDU1LjI1IDQ4IDY0IDQ4SDIzNi4xMjVMMzM2IDE0Ny44NzVWNDQ4Wk0yNDAgNDMySDI2MkMyODUuMTg4IDQzMiAzMDQgNDEzLjE4OCAzMDQgMzkwVjM1MkgyNDBWNDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SimCard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M144 240H122C98.812 240 80 258.812 80 282V320H144V240ZM80 390C80 413.188 98.812 432 122 432H208V352H80V390ZM176 320H304V282C304 258.812 285.188 240 262 240H176V320ZM374.627 118.627L265.373 9.373C259.371 3.371 251.232 0 242.746 0H64C28.801 0 0 28.799 0 64V448C0 483.199 28.801 512 64 512H320C355.199 512 384 483.199 384 448V141.254C384 132.768 380.629 124.629 374.627 118.627ZM336 448C336 456.75 328.75 464 320 464H64C55.25 464 48 456.75 48 448V64C48 55.25 55.25 48 64 48H236.125L336 147.875V448ZM240 432H262C285.188 432 304 413.188 304 390V352H240V432Z" />
        </Icon>
    </>
}