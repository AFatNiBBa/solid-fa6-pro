
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `code-fork` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-fork?s=duotone code-fork}
 * @preview ![code-fork](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMCAxNTMuMjQ2VjE5MkM0MDAgMjQ0LjkzOCAzNTYuOTM4IDI4OCAzMDQgMjg4SDI1NlYzNTguNzU0QzI0Ni4xODkgMzU0LjQ2MSAyMzUuMzk1IDM1MiAyMjQgMzUyUzIwMS44MTEgMzU0LjQ2MSAxOTIgMzU4Ljc1NFYyODhIMTQ0QzkxLjA2MiAyODggNDggMjQ0LjkzOCA0OCAxOTJWMTUzLjI0NkM1Ny44MTEgMTU3LjUzOSA2OC42MDUgMTYwIDgwIDE2MFMxMDIuMTg5IDE1Ny41MzkgMTEyIDE1My4yNDZWMTkyQzExMiAyMDkuNjU2IDEyNi4zNDQgMjI0IDE0NCAyMjRIMzA0QzMyMS42NTYgMjI0IDMzNiAyMDkuNjU2IDMzNiAxOTJWMTUzLjI0NkMzNDUuODExIDE1Ny41MzkgMzU2LjYwNSAxNjAgMzY4IDE2MFMzOTAuMTg5IDE1Ny41MzkgNDAwIDE1My4yNDZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTIyNCAzNTJDMTc5LjgxNiAzNTIgMTQ0IDM4Ny44MTYgMTQ0IDQzMlMxNzkuODE2IDUxMiAyMjQgNTEyUzMwNCA0NzYuMTg0IDMwNCA0MzJTMjY4LjE4NCAzNTIgMjI0IDM1MlpNMjI0IDQ1NkMyMTAuNzY2IDQ1NiAyMDAgNDQ1LjIzNCAyMDAgNDMyUzIxMC43NjYgNDA4IDIyNCA0MDhTMjQ4IDQxOC43NjYgMjQ4IDQzMlMyMzcuMjM0IDQ1NiAyMjQgNDU2Wk04MCAwQzM1LjgxNiAwIDAgMzUuODE2IDAgODBTMzUuODE2IDE2MCA4MCAxNjBTMTYwIDEyNC4xODQgMTYwIDgwUzEyNC4xODQgMCA4MCAwWk04MCAxMDRDNjYuNzY2IDEwNCA1NiA5My4yMzQgNTYgODBTNjYuNzY2IDU2IDgwIDU2UzEwNCA2Ni43NjYgMTA0IDgwUzkzLjIzNCAxMDQgODAgMTA0Wk0zNjggMEMzMjMuODE2IDAgMjg4IDM1LjgxNiAyODggODBTMzIzLjgxNiAxNjAgMzY4IDE2MFM0NDggMTI0LjE4NCA0NDggODBTNDEyLjE4NCAwIDM2OCAwWk0zNjggMTA0QzM1NC43NjYgMTA0IDM0NCA5My4yMzQgMzQ0IDgwUzM1NC43NjYgNTYgMzY4IDU2UzM5MiA2Ni43NjYgMzkyIDgwUzM4MS4yMzQgMTA0IDM2OCAxMDRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CodeFork(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M400 153.246V192C400 244.938 356.938 288 304 288H256V358.754C246.189 354.461 235.395 352 224 352S201.811 354.461 192 358.754V288H144C91.062 288 48 244.938 48 192V153.246C57.811 157.539 68.605 160 80 160S102.189 157.539 112 153.246V192C112 209.656 126.344 224 144 224H304C321.656 224 336 209.656 336 192V153.246C345.811 157.539 356.605 160 368 160S390.189 157.539 400 153.246Z" />
            <path d="M224 352C179.816 352 144 387.816 144 432S179.816 512 224 512S304 476.184 304 432S268.184 352 224 352ZM224 456C210.766 456 200 445.234 200 432S210.766 408 224 408S248 418.766 248 432S237.234 456 224 456ZM80 0C35.816 0 0 35.816 0 80S35.816 160 80 160S160 124.184 160 80S124.184 0 80 0ZM80 104C66.766 104 56 93.234 56 80S66.766 56 80 56S104 66.766 104 80S93.234 104 80 104ZM368 0C323.816 0 288 35.816 288 80S323.816 160 368 160S448 124.184 448 80S412.184 0 368 0ZM368 104C354.766 104 344 93.234 344 80S354.766 56 368 56S392 66.766 392 80S381.234 104 368 104Z" />
        </Icon>
    </>
}