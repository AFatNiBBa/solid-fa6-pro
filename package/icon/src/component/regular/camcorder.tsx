
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `camcorder` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camcorder?s=regular camcorder}
 * @preview ![camcorder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTIgMjQwSDEwNEM5MC43NSAyNDAgODAgMjUwLjc1IDgwIDI2NFM5MC43NSAyODggMTA0IDI4OEgzMTJDMzI1LjI1IDI4OCAzMzYgMjc3LjI1IDMzNiAyNjRTMzI1LjI1IDI0MCAzMTIgMjQwWk01NTcuNjA5IDE4Mi4zNDRDNTQ2LjA3OCAxNzQuOTM4IDUzMS43MzQgMTczLjk1MyA1MTkuMzI4IDE3OS42NTZMNDE2IDIyNy4wMTZWMjI0QzQxNiAxODguNjU0IDM4Ny4zNDggMTYwIDM1MiAxNjBIOTZWMTIwQzk2IDk3LjkzOCAxMTMuOTM4IDgwIDEzNiA4MEgyOTZDMzA5LjI1IDgwIDMyMCA2OS4yNSAzMjAgNTZTMzA5LjI1IDMyIDI5NiAzMkgxMzZDODcuNDY5IDMyIDQ4IDcxLjQ2OSA0OCAxMjBWMTYyLjI2NEMyMC40NDMgMTY5LjQgMCAxOTQuMjEzIDAgMjI0VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBIMzUyQzM4Ny4zNDggNDgwIDQxNiA0NTEuMzQ2IDQxNiA0MTZWNDEyLjk4NEw1MTkuMzI4IDQ2MC4zNDRDNTI0LjY3MiA0NjIuNzk3IDUzMC4zNTkgNDY0LjAxNiA1MzYuMDE2IDQ2NC4wMTZDNTQzLjU0NyA0NjQuMDE2IDU1MS4wMzEgNDYxLjg3NSA1NTcuNjA5IDQ1Ny42NTZDNTY5LjEyNSA0NTAuMjUgNTc2IDQzNy42NzIgNTc2IDQyMy45ODRWMjE2LjAxNkM1NzYgMjAyLjMyOCA1NjkuMTI1IDE4OS43NSA1NTcuNjA5IDE4Mi4zNDRaTTM2OCA0MTZDMzY4IDQyNC44MjIgMzYwLjgyMiA0MzIgMzUyIDQzMkg2NEM1NS4xNzggNDMyIDQ4IDQyNC44MjIgNDggNDE2VjIyNEM0OCAyMTUuMTc4IDU1LjE3OCAyMDggNjQgMjA4SDM1MkMzNjAuODIyIDIwOCAzNjggMjE1LjE3OCAzNjggMjI0VjQxNlpNNTI4IDQxMS41MTZMNDE2IDM2MC4xODJWMjc5LjgxOEw1MjggMjI4LjQ4NFY0MTEuNTE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Camcorder(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M312 240H104C90.75 240 80 250.75 80 264S90.75 288 104 288H312C325.25 288 336 277.25 336 264S325.25 240 312 240ZM557.609 182.344C546.078 174.938 531.734 173.953 519.328 179.656L416 227.016V224C416 188.654 387.348 160 352 160H96V120C96 97.938 113.938 80 136 80H296C309.25 80 320 69.25 320 56S309.25 32 296 32H136C87.469 32 48 71.469 48 120V162.264C20.443 169.4 0 194.213 0 224V416C0 451.346 28.654 480 64 480H352C387.348 480 416 451.346 416 416V412.984L519.328 460.344C524.672 462.797 530.359 464.016 536.016 464.016C543.547 464.016 551.031 461.875 557.609 457.656C569.125 450.25 576 437.672 576 423.984V216.016C576 202.328 569.125 189.75 557.609 182.344ZM368 416C368 424.822 360.822 432 352 432H64C55.178 432 48 424.822 48 416V224C48 215.178 55.178 208 64 208H352C360.822 208 368 215.178 368 224V416ZM528 411.516L416 360.182V279.818L528 228.484V411.516Z" />
        </Icon>
    </>
}