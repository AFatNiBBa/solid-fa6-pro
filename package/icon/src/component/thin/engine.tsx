
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `engine` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/engine?s=thin engine}
 * @preview ![engine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMjI0QzE3NC4zNDQgMjI0IDE2MCAyMzguMzU5IDE2MCAyNTZTMTc0LjM0NCAyODggMTkyIDI4OFMyMjQgMjczLjY0MSAyMjQgMjU2UzIwOS42NTYgMjI0IDE5MiAyMjRaTTE5MiAyNzJDMTgzLjE4OCAyNzIgMTc2IDI2NC44MjggMTc2IDI1NlMxODMuMTg4IDI0MCAxOTIgMjQwUzIwOCAyNDcuMTcyIDIwOCAyNTZTMjAwLjgxMiAyNzIgMTkyIDI3MlpNMzg0IDIyNEMzNjYuMzQ0IDIyNCAzNTIgMjM4LjM1OSAzNTIgMjU2UzM2Ni4zNDQgMjg4IDM4NCAyODhTNDE2IDI3My42NDEgNDE2IDI1NlM0MDEuNjU2IDIyNCAzODQgMjI0Wk0zODQgMjcyQzM3NS4xODggMjcyIDM2OCAyNjQuODI4IDM2OCAyNTZTMzc1LjE4OCAyNDAgMzg0IDI0MFM0MDAgMjQ3LjE3MiA0MDAgMjU2UzM5Mi44MTIgMjcyIDM4NCAyNzJaTTYwOCAxOTJINTkyQzU3NC4zNDQgMTkyIDU2MCAyMDYuMzU5IDU2MCAyMjRWMjU2SDUxMlYyMDhDNTEyIDIwMy4xNDEgNTA5Ljc4MSAxOTguNTQ3IDUwNS45OTkgMTk1LjVMNDM0Ljc4MSAxMzguNTQ3QzQyNi4zMTIgMTMxLjc1IDQxNS42NTYgMTI4IDQwNC43ODEgMTI4SDI5NlY4MEgzOTJDMzk2LjQxOCA4MCA0MDAgNzYuNDE4IDQwMCA3MlMzOTYuNDE4IDY0IDM5MiA2NEgxODRDMTc5LjU4MiA2NCAxNzYgNjcuNTgyIDE3NiA3MlMxNzkuNTgyIDgwIDE4NCA4MEgyODBWMTI4SDExMkM4NS41MzEgMTI4IDY0IDE0OS41MzEgNjQgMTc2VjI0OEgxNlYxMzZDMTYgMTMxLjU4MiAxMi40MTggMTI4IDggMTI4UzAgMTMxLjU4MiAwIDEzNlYzNzZDMCAzODAuNDE4IDMuNTgyIDM4NCA4IDM4NFMxNiAzODAuNDE4IDE2IDM3NlYyNjRINjRWMzM2QzY0IDM2Mi40NjkgODUuNTMxIDM4NCAxMTIgMzg0SDE4NS4zNzVMMjM1LjMxMyA0MzMuOTM4QzI0NC4yNSA0NDIuODc1IDI1Ni42MjUgNDQ4IDI2OS4yNSA0NDhINDY0QzQ5MC40NjkgNDQ4IDUxMiA0MjYuNDY5IDUxMiA0MDBWMzg0SDU2MFY0MTZDNTYwIDQzMy42NDEgNTc0LjM0NCA0NDggNTkyIDQ0OEg2MDhDNjI1LjY1NiA0NDggNjQwIDQzMy42NDEgNjQwIDQxNlYyMjRDNjQwIDIwNi4zNTkgNjI1LjY1NiAxOTIgNjA4IDE5MlpNNDk2IDQwMEM0OTYgNDE3LjY0NSA0ODEuNjQ1IDQzMiA0NjQgNDMySDI2OS4yNUMyNjAuODMgNDMyIDI1Mi41ODQgNDI4LjU4MiAyNDYuNjI3IDQyMi42MjNMMTk2LjY4OSAzNzIuNjg2TDE5Mi4wMDIgMzY4SDExMkM5NC4zNTUgMzY4IDgwIDM1My42NDUgODAgMzM2VjE3NkM4MCAxNTguMzU1IDk0LjM1NSAxNDQgMTEyIDE0NEg0MDQuNzgxQzQxMi4wMjMgMTQ0IDQxOS4xMjEgMTQ2LjQ5NCA0MjQuNzg5IDE1MS4wNDNMNDk2IDIwOFY0MDBaTTYyNCA0MTZDNjI0IDQyNC44MjIgNjE2LjgyMiA0MzIgNjA4IDQzMkg1OTJDNTgzLjE3OCA0MzIgNTc2IDQyNC44MjIgNTc2IDQxNlYzNjhINTEyVjI3Mkg1NzZWMjI0QzU3NiAyMTUuMTc4IDU4My4xNzggMjA4IDU5MiAyMDhINjA4QzYxNi44MjIgMjA4IDYyNCAyMTUuMTc4IDYyNCAyMjRWNDE2Wk0yODggMjI0QzI3MC4zNDQgMjI0IDI1NiAyMzguMzU5IDI1NiAyNTZTMjcwLjM0NCAyODggMjg4IDI4OFMzMjAgMjczLjY0MSAzMjAgMjU2UzMwNS42NTYgMjI0IDI4OCAyMjRaTTI4OCAyNzJDMjc5LjE4OCAyNzIgMjcyIDI2NC44MjggMjcyIDI1NlMyNzkuMTg4IDI0MCAyODggMjQwUzMwNCAyNDcuMTcyIDMwNCAyNTZTMjk2LjgxMiAyNzIgMjg4IDI3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Engine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M192 224C174.344 224 160 238.359 160 256S174.344 288 192 288S224 273.641 224 256S209.656 224 192 224ZM192 272C183.188 272 176 264.828 176 256S183.188 240 192 240S208 247.172 208 256S200.812 272 192 272ZM384 224C366.344 224 352 238.359 352 256S366.344 288 384 288S416 273.641 416 256S401.656 224 384 224ZM384 272C375.188 272 368 264.828 368 256S375.188 240 384 240S400 247.172 400 256S392.812 272 384 272ZM608 192H592C574.344 192 560 206.359 560 224V256H512V208C512 203.141 509.781 198.547 505.999 195.5L434.781 138.547C426.312 131.75 415.656 128 404.781 128H296V80H392C396.418 80 400 76.418 400 72S396.418 64 392 64H184C179.582 64 176 67.582 176 72S179.582 80 184 80H280V128H112C85.531 128 64 149.531 64 176V248H16V136C16 131.582 12.418 128 8 128S0 131.582 0 136V376C0 380.418 3.582 384 8 384S16 380.418 16 376V264H64V336C64 362.469 85.531 384 112 384H185.375L235.313 433.938C244.25 442.875 256.625 448 269.25 448H464C490.469 448 512 426.469 512 400V384H560V416C560 433.641 574.344 448 592 448H608C625.656 448 640 433.641 640 416V224C640 206.359 625.656 192 608 192ZM496 400C496 417.645 481.645 432 464 432H269.25C260.83 432 252.584 428.582 246.627 422.623L196.689 372.686L192.002 368H112C94.355 368 80 353.645 80 336V176C80 158.355 94.355 144 112 144H404.781C412.023 144 419.121 146.494 424.789 151.043L496 208V400ZM624 416C624 424.822 616.822 432 608 432H592C583.178 432 576 424.822 576 416V368H512V272H576V224C576 215.178 583.178 208 592 208H608C616.822 208 624 215.178 624 224V416ZM288 224C270.344 224 256 238.359 256 256S270.344 288 288 288S320 273.641 320 256S305.656 224 288 224ZM288 272C279.188 272 272 264.828 272 256S279.188 240 288 240S304 247.172 304 256S296.812 272 288 272Z" />
        </Icon>
    </>
}