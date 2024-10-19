
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `image-slash` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/image-slash?s=light image-slash}
 * @preview ![image-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzMuOTIzIDQ4My40MzZMMjUuOTIxIDMuNDJDMTguOTg0IC0yLjAzMyA4LjkyMSAtMC44MyAzLjQzNyA2LjA2MUMtMi4wMzIgMTIuOTk4IC0wLjg0NSAyMy4wNjEgNi4wNzcgMjguNTQ1TDYxNC4wNzkgNTA4LjU2MkM2MTcuMDE3IDUxMC44NzUgNjIwLjUxNyA1MTIgNjIzLjk4NSA1MTJDNjI4LjcyIDUxMiA2MzMuNDA3IDUwOS45MDYgNjM2LjU2NCA1MDUuOTIyQzY0Mi4wMzIgNDk4Ljk4NCA2NDAuODQ1IDQ4OC45MiA2MzMuOTIzIDQ4My40MzZaTTUxMi4wMDEgNjRDNTI5LjY0NiA2NCA1NDQuMDAxIDc4LjM1NSA1NDQuMDAxIDk2VjM1MS4yNzlMNTc2LjAwMSAzNzYuNTQzVjk2QzU3Ni4wMDEgNjAuNjU0IDU0Ny4zNDcgMzIgNTEyLjAwMSAzMkgxMzkuNTkzTDE4MC4xMjQgNjRINTEyLjAwMVpNMzM3LjcwNCAxNTcuNzgxTDMyNC4zOTQgMTc3LjlMMzQ4LjQyNyAxOTYuODczTDM2Mi4yMzUgMTc1LjQ2OUw0MDYuOTk3IDI0My4xMTVMNDg3LjM0NSAzMDYuNTQ5TDM4OC45MzkgMTU3Ljg0NEMzNzcuNTY0IDE0MC40NjkgMzQ5LjA0OCAxNDAuNTMxIDMzNy43MDQgMTU3Ljc4MVpNMjAwLjI0NSAyNDIuOTlMMTMzLjg0NSAzMzUuMDMxQzEyNy4wNDggMzQ0LjQzNyAxMjYuMDk1IDM1Ni43NSAxMzEuMjk4IDM2Ny4wMzFDMTM2LjUzMiAzNzcuNSAxNDcuMDQ4IDM4NCAxNTguNzUxIDM4NEgzNzguODUzTDM2MC4xMTQgMzY5LjIwN0wzMzguMzE5IDM1MkgxNTkuNzk4TDIyNC4xNTcgMjYxLjg2OUwyMDAuMjQ1IDI0Mi45OVpNNDU5LjkxNSA0NDhIMTI4LjAwMUMxMTAuMzU3IDQ0OCA5Ni4wMDEgNDMzLjY0NSA5Ni4wMDEgNDE2VjE2MC42ODlMNjQuMDAxIDEzNS40MjZWNDE2QzY0LjAwMSA0NTEuMzQ2IDkyLjY1NSA0ODAgMTI4LjAwMSA0ODBINTAwLjQ0OEw0OTYuNjc1IDQ3Ny4wMjFMNDU5LjkxNSA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ImageSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M633.923 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.079 508.562C617.017 510.875 620.517 512 623.985 512C628.72 512 633.407 509.906 636.564 505.922C642.032 498.984 640.845 488.92 633.923 483.436ZM512.001 64C529.646 64 544.001 78.355 544.001 96V351.279L576.001 376.543V96C576.001 60.654 547.347 32 512.001 32H139.593L180.124 64H512.001ZM337.704 157.781L324.394 177.9L348.427 196.873L362.235 175.469L406.997 243.115L487.345 306.549L388.939 157.844C377.564 140.469 349.048 140.531 337.704 157.781ZM200.245 242.99L133.845 335.031C127.048 344.437 126.095 356.75 131.298 367.031C136.532 377.5 147.048 384 158.751 384H378.853L360.114 369.207L338.319 352H159.798L224.157 261.869L200.245 242.99ZM459.915 448H128.001C110.357 448 96.001 433.645 96.001 416V160.689L64.001 135.426V416C64.001 451.346 92.655 480 128.001 480H500.448L496.675 477.021L459.915 448Z" />
        </Icon>
    </>
}