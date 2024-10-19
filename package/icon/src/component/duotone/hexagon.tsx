
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hexagon` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=duotone hexagon}
 * @preview ![hexagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwNS44MjQgMjc4LjYzM0w0MDAuNDM3IDQ1Ny44MzJDMzkyLjMyIDQ3MS40ODQgMzc3LjUgNDgwIDM2MS4zODcgNDgwSDE1MC42MTNDMTM0LjUgNDgwIDExOS42OCA0NzEuNDg0IDExMS41NjMgNDU3LjgzMkw2LjE3NiAyNzguNjMzQy0yLjA1OSAyNjQuNjMzIC0yLjA1OSAyNDcuMzY3IDYuMTc2IDIzMy4zNjdMMTExLjU2MyA1NC4xNjRDMTE5LjY4IDQwLjUxNiAxMzQuNSAzMiAxNTAuNjEzIDMySDM2MS4zODdDMzc3LjUgMzIgMzkyLjMyIDQwLjUxNiA0MDAuNDM3IDU0LjE2NEw1MDUuODI0IDIzMy4zNjdDNTE0LjA1OSAyNDcuMzY3IDUxNC4wNTkgMjY0LjYzMyA1MDUuODI0IDI3OC42MzNaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Hexagon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M505.824 278.633L400.437 457.832C392.32 471.484 377.5 480 361.387 480H150.613C134.5 480 119.68 471.484 111.563 457.832L6.176 278.633C-2.059 264.633 -2.059 247.367 6.176 233.367L111.563 54.164C119.68 40.516 134.5 32 150.613 32H361.387C377.5 32 392.32 40.516 400.437 54.164L505.824 233.367C514.059 247.367 514.059 264.633 505.824 278.633Z" />
        </Icon>
    </>
}