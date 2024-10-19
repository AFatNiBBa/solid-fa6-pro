
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-rock` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-rock?s=duotone hand-rock}
 * @preview ![hand-rock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMCA5NkMzOTAuODUyIDk2IDM4Mi4zODUgOTguNjk3IDM3NS4xMDcgMTAzLjE0M0MzNzAuOTQxIDgwLjg2OSAzNTEuNDY3IDY0IDMyOCA2NEMzMTEuMjg3IDY0IDI5Ni41OTggNzIuNTY4IDI4OCA4NS41MzFWODBDMjg4IDUzLjQ4NCAyNjYuNSAzMiAyNDAgMzJDMjI3LjUgMzIgMjE2LjIxMyAzNi44OTYgMjA3LjY3IDQ0LjczQzIwNS45NTkgMTkuNzcgMTg1LjM4MSAwIDE2MCAwQzEzMy41IDAgMTEyIDIxLjQ4NCAxMTIgNDhWMTc2QzExMiAxODQuODM2IDEwNC44MzYgMTkyIDk2IDE5MlM4MCAxODQuODM2IDgwIDE3NlYxMzAuNTE2TDUwIDE1NC41MTZDMzguNjI1IDE2My42MjUgMzIgMTc3LjQyMiAzMiAxOTJWMjYxLjIwNUMzMiAyOTQuMzMgNDggMzI1Ljc2OCA3NC44MTIgMzQ1LjMzTDEyOCAzODRWNTEySDM4NFYzODRDNDIyLjU1MSAzNTguMTM1IDQ0OCAzMTQuMTkxIDQ0OCAyNjQuMzc3VjE0NEM0NDggMTE3LjQ4NCA0MjYuNSA5NiA0MDAgOTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function HandRock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M400 96C390.852 96 382.385 98.697 375.107 103.143C370.941 80.869 351.467 64 328 64C311.287 64 296.598 72.568 288 85.531V80C288 53.484 266.5 32 240 32C227.5 32 216.213 36.896 207.67 44.73C205.959 19.77 185.381 0 160 0C133.5 0 112 21.484 112 48V176C112 184.836 104.836 192 96 192S80 184.836 80 176V130.516L50 154.516C38.625 163.625 32 177.422 32 192V261.205C32 294.33 48 325.768 74.812 345.33L128 384V512H384V384C422.551 358.135 448 314.191 448 264.377V144C448 117.484 426.5 96 400 96Z" />
        </Icon>
    </>
}