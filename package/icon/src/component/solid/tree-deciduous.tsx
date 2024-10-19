
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tree-deciduous` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tree-deciduous?s=solid tree-deciduous}
 * @preview ![tree-deciduous](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMjg4QzUxMiAzMTUuODQxIDUwMS43NDkgMzM5LjQ0NSA0ODEuMzkgMzU4LjUyNkM0NjMuMzA2IDM3NS40NzUgNDM4LjcyMSAzODQgNDEzLjkzNiAzODRMMjg4IDM4NFY0ODAuMDAxQzI4OCA0OTcuNjc0IDI3My42NzQgNTEyIDI1Ni4wMDEgNTEySDI1NS45OTlDMjM4LjMyNiA1MTIgMjI0IDQ5Ny42NzQgMjI0IDQ4MC4wMDFWMzg0TDk4LjA2NCAzODRDNzMuMjc5IDM4NCA0OC42OTQgMzc1LjQ3NSAzMC42MSAzNTguNTI2QzEwLjI1MSAzMzkuNDQ1IDAgMzE1Ljg0MSAwIDI4OEMwIDI2OC42MjUgNS4zNzUgMjUxIDE2IDIzNVM0MSAyMDcuMzc1IDU5IDIwMEM0OS42MjUgMTg0IDQ2LjEyNSAxNjcuNSA0OC41IDE1MC41UzU3LjYyNSAxMTguODc1IDY5IDEwNi41Uzk0LjEyNSA4NiAxMTAuNSA4MlMxNDMuMzc1IDc5LjYyNSAxNjAgODdDMTYyLjYyNSA2Mi4zNzUgMTczLjEyNSA0MS42MjUgMTkxLjUgMjVTMjMxLjM3NSAwIDI1NiAwUzMwMi4xMjUgOC4zNzUgMzIwLjUgMjVTMzQ5LjM3NSA2Mi4zNzUgMzUyIDg3QzM2OC42MjUgNzkuNjI1IDM4NS4xMjUgNzggNDAxLjUgODJTNDMxLjYyNSA5NC4xMjUgNDQzIDEwNi41UzQ2MS4xMjUgMTMzLjUgNDYzLjUgMTUwLjVTNDYyLjYyNSAxODQgNDU0IDIwMEg0NTNDNDcxIDIwNy4zNzUgNDg1LjM3NSAyMTkgNDk2IDIzNVM1MTIgMjY4LjYyNSA1MTIgMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TreeDeciduous(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 288C512 315.841 501.749 339.445 481.39 358.526C463.306 375.475 438.721 384 413.936 384L288 384V480.001C288 497.674 273.674 512 256.001 512H255.999C238.326 512 224 497.674 224 480.001V384L98.064 384C73.279 384 48.694 375.475 30.61 358.526C10.251 339.445 0 315.841 0 288C0 268.625 5.375 251 16 235S41 207.375 59 200C49.625 184 46.125 167.5 48.5 150.5S57.625 118.875 69 106.5S94.125 86 110.5 82S143.375 79.625 160 87C162.625 62.375 173.125 41.625 191.5 25S231.375 0 256 0S302.125 8.375 320.5 25S349.375 62.375 352 87C368.625 79.625 385.125 78 401.5 82S431.625 94.125 443 106.5S461.125 133.5 463.5 150.5S462.625 184 454 200H453C471 207.375 485.375 219 496 235S512 268.625 512 288Z" />
        </Icon>
    </>
}