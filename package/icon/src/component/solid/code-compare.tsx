
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `code-compare` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-compare?s=solid code-compare}
 * @preview ![code-compare](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgOTZDMzIwIDkxLjI1IDMxNy44OTEgODYuNzUgMzE0LjI1IDgzLjcxOUwyMTguMjUgMy43MTlDMjEzLjQ2OSAtMC4zMTIgMjA2LjgxMiAtMS4wOTQgMjAxLjIxOSAxLjVDMTk1LjU5NCA0LjE1NiAxOTIgOS43ODEgMTkyIDE2VjY0SDE0NEM5MS4wNjIgNjQgNDggMTA3LjA2MiA0OCAxNjBWMzQyLjc1NEMxOS43NzEgMzU1LjEwOSAwIDM4My4yMTEgMCA0MTZDMCA0NjAuMTg0IDM1LjgxOCA0OTYgODAgNDk2QzEyNC4xODQgNDk2IDE2MCA0NjAuMTg0IDE2MCA0MTZDMTYwIDM4My4yMTEgMTQwLjIzMiAzNTUuMTA5IDExMiAzNDIuNzU0VjE2MEMxMTIgMTQyLjM0NCAxMjYuMzU5IDEyOCAxNDQgMTI4SDE5MlYxNzZDMTkyIDE4Mi4yMTkgMTk1LjU5NCAxODcuODQ0IDIwMS4yMTkgMTkwLjVDMjAzLjM3NSAxOTEuNSAyMDUuNjg4IDE5MiAyMDggMTkyQzIxMS42NzIgMTkyIDIxNS4zMTIgMTkwLjc1IDIxOC4yNSAxODguMjgxTDMxNC4yNSAxMDguMjgxQzMxNy44OTEgMTA1LjI1IDMyMCAxMDAuNzUgMzIwIDk2Wk04MCA0NDBDNjYuNzY4IDQ0MCA1NiA0MjkuMjM0IDU2IDQxNlM2Ni43NjggMzkyIDgwIDM5MkM5My4yMzQgMzkyIDEwNCA0MDIuNzY2IDEwNCA0MTZTOTMuMjM0IDQ0MCA4MCA0NDBaTTQzMiAxNkMzODcuODE4IDE2IDM1MiA1MS44MTYgMzUyIDk2QzM1MiAxMjguNzg5IDM3MS43NzEgMTU2Ljg5MSA0MDAgMTY5LjI0NlYzNTJDNDAwIDM2OS42NTYgMzg1LjY0MSAzODQgMzY4IDM4NEgzMjBWMzM2QzMyMCAzMjkuNzgxIDMxNi40MDYgMzI0LjE1NiAzMTAuNzgxIDMyMS41QzMwNS4yMDMgMzE4LjkzOCAyOTguNTQ3IDMxOS42ODggMjkzLjc1IDMyMy43MTlMMTk3Ljc1IDQwMy43MTlDMTk0LjEwOSA0MDYuNzUgMTkyIDQxMS4yNSAxOTIgNDE2UzE5NC4xMDkgNDI1LjI1IDE5Ny43NSA0MjguMjgxTDI5My43NSA1MDguMjgxQzI5Ni42ODggNTEwLjc1IDMwMC4zMjggNTEyIDMwNCA1MTJDMzA2LjI5NyA1MTIgMzA4LjYyNSA1MTEuNSAzMTAuNzgxIDUxMC41QzMxNi40MDYgNTA3Ljg0NCAzMjAgNTAyLjIxOSAzMjAgNDk2VjQ0OEgzNjhDNDIwLjkzOCA0NDggNDY0IDQwNC45MzggNDY0IDM1MlYxNjkuMjQ2QzQ5Mi4yMzIgMTU2Ljg5MSA1MTIgMTI4Ljc4OSA1MTIgOTZDNTEyIDUxLjgxNiA0NzYuMTg0IDE2IDQzMiAxNlpNNDMyIDEyMEM0MTguNzY4IDEyMCA0MDggMTA5LjIzNCA0MDggOTZTNDE4Ljc2OCA3MiA0MzIgNzJDNDQ1LjIzNCA3MiA0NTYgODIuNzY2IDQ1NiA5NlM0NDUuMjM0IDEyMCA0MzIgMTIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CodeCompare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M320 96C320 91.25 317.891 86.75 314.25 83.719L218.25 3.719C213.469 -0.312 206.812 -1.094 201.219 1.5C195.594 4.156 192 9.781 192 16V64H144C91.062 64 48 107.062 48 160V342.754C19.771 355.109 0 383.211 0 416C0 460.184 35.818 496 80 496C124.184 496 160 460.184 160 416C160 383.211 140.232 355.109 112 342.754V160C112 142.344 126.359 128 144 128H192V176C192 182.219 195.594 187.844 201.219 190.5C203.375 191.5 205.688 192 208 192C211.672 192 215.312 190.75 218.25 188.281L314.25 108.281C317.891 105.25 320 100.75 320 96ZM80 440C66.768 440 56 429.234 56 416S66.768 392 80 392C93.234 392 104 402.766 104 416S93.234 440 80 440ZM432 16C387.818 16 352 51.816 352 96C352 128.789 371.771 156.891 400 169.246V352C400 369.656 385.641 384 368 384H320V336C320 329.781 316.406 324.156 310.781 321.5C305.203 318.938 298.547 319.688 293.75 323.719L197.75 403.719C194.109 406.75 192 411.25 192 416S194.109 425.25 197.75 428.281L293.75 508.281C296.688 510.75 300.328 512 304 512C306.297 512 308.625 511.5 310.781 510.5C316.406 507.844 320 502.219 320 496V448H368C420.938 448 464 404.938 464 352V169.246C492.232 156.891 512 128.789 512 96C512 51.816 476.184 16 432 16ZM432 120C418.768 120 408 109.234 408 96S418.768 72 432 72C445.234 72 456 82.766 456 96S445.234 120 432 120Z" />
        </Icon>
    </>
}