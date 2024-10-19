
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `users-gear` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/users-gear?s=light users-gear}
 * @preview ![users-gear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTkuODU5IDMyMEMzNzcuMjczIDMyMCA0MjMuODE0IDI3My40MzYgNDIzLjgxNCAyMTZDNDIzLjgxNCAxNTguNTYyIDM3Ny4yNzMgMTEyIDMxOS44NTkgMTEyQzI2Mi40NTEgMTEyIDIxNS45MDQgMTU4LjU2MiAyMTUuOTA0IDIxNkMyMTUuOTA0IDI3My40MzYgMjYyLjQ1MSAzMjAgMzE5Ljg1OSAzMjBaTTMxOS44NTkgMTQ0QzM1OS41MzUgMTQ0IDM5MS44MTQgMTc2LjI5OSAzOTEuODE0IDIxNlMzNTkuNTM1IDI4OCAzMTkuODU5IDI4OFMyNDcuOTA0IDI1NS43MDEgMjQ3LjkwNCAyMTZTMjgwLjE4NCAxNDQgMzE5Ljg1OSAxNDRaTTQ5NiAxOTJDNDg1LjIwMSAxOTIgNDc0LjYyMSAxOTQuMzQyIDQ2NC41MjkgMTk4Ljk3MUM0NTYuNzg5IDIwMi41MjEgNDUyLjM5NSAyMTEuNDgyIDQ1NS4zODcgMjE5LjQ1NUM0NTguNzIzIDIyOC4zMzggNDY4Ljg5NSAyMzIuMzQgNDc3LjI1IDIyOC4zNDRDNDgzLjMyOCAyMjUuNDY5IDQ4OS42MjUgMjI0IDQ5NiAyMjRINTYxLjA3OEM1NzcuNzI3IDIyNCA1OTIuMzE2IDIzMy40MzkgNjAwLjYzMSAyNDcuNjAyQzYwMy42IDI1Mi42NiA2MDguNzg5IDI1NiA2MTQuNjU0IDI1NkM2MjcuMDcyIDI1NiA2MzQuNTg0IDI0Mi41MjEgNjI4LjM1IDIzMS43ODNDNjE0LjUyMyAyMDcuOTYzIDU4OS41ODggMTkyIDU2MS4wNzggMTkySDQ5NlpNNTEyIDE2MEM1NTYuMTg0IDE2MCA1OTIgMTI0LjE4MiA1OTIgODBTNTU2LjE4NCAwIDUxMiAwQzQ2Ny44MiAwIDQzMiAzNS44MTggNDMyIDgwUzQ2Ny44MiAxNjAgNTEyIDE2MFpNNTEyIDMyQzUzOC40NjcgMzIgNTYwIDUzLjUzMyA1NjAgODBTNTM4LjQ2NyAxMjggNTEyIDEyOFM0NjQgMTA2LjQ2NyA0NjQgODBTNDg1LjUzMyAzMiA1MTIgMzJaTTYyNC41MTYgMzk3LjE1Nkw2MTQuNSAzOTEuMzI4QzYxNC44NTkgMzg2LjQzOCA2MTQuODU5IDM4MS41NDcgNjE0LjUgMzc2LjY3Mkw2MjQuMDMxIDM3MS4xMDlDNjMyLjg3NSAzNjYuMzQ0IDYzNy4yMDMgMzU1LjgyOCA2MzQuMjM0IDM0NS44OTFDNjI4LjU2MyAzMjcuODc1IDYxOC43OTcgMzExIDYwNi4xNTYgMjk3LjM0NEM1OTkuNDUzIDI4OS44MjggNTg4LjIzNCAyODguMDc4IDU3OS41MTYgMjkzLjA5NEw1NjkuNTMxIDI5OC44NTlDNTY1LjQ4NCAyOTYuMTI1IDU2MS4yNjYgMjkzLjY4OCA1NTYuODkxIDI5MS41NjNWMjc5Ljk2OUM1NTYuODkxIDI2OS43ODEgNTQ5LjY1NiAyNjAuOTg0IDU0MC4xMjUgMjU5LjE0MUM1MjEuNTE2IDI1NC45NTMgNTAyLjAxNiAyNTQuOTg0IDQ4NC4yNSAyNTkuMDQ3QzQ3NC4zMjggMjYwLjk2OSA0NjcuMTA5IDI2OS43NjYgNDY3LjEwOSAyNzkuOTY5VjI5MS41NzhDNDYyLjczNCAyOTMuNzAzIDQ1OC41IDI5Ni4xNDEgNDU0LjQ1MyAyOTguODc1TDQ0NC43MDMgMjkzLjI2NkM0MzYuMTU2IDI4OC4xMDkgNDI0Ljk2OSAyODkuNjg3IDQxNy45NTMgMjk3LjEyNUM0MDUuMDMxIDMxMS4xMDkgMzk1LjI4MSAzMjggMzg5LjcxOSAzNDYuMTA5QzM4Ni44MTIgMzU1LjgyOCAzOTAuODkxIDM2Ni4wNDcgMzk5LjQwNiAzNzAuODQ0TDQwOS40NjkgMzc2LjcwM0M0MDkuMTQxIDM4MS41NjMgNDA5LjE0MSAzODYuNDM4IDQwOS40NjkgMzkxLjI5N0wzOTkuODkxIDM5Ni44OTFDMzkwLjkzNyA0MDEuNzAzIDM4Ni43NjYgNDExLjk4NCAzODkuNzUgNDIyLjAxNkMzOTUuMjM0IDQzOS44MjggNDA0Ljk2OSA0NTYuNzE5IDQxOC4wNjIgNDcwLjk4NEM0MjQuOTIyIDQ3OC4yNjYgNDM1Ljc5NyA0NzkuODkxIDQ0NC4zNzUgNDc0LjkyMkw0NTQuNDY5IDQ2OS4xMjVDNDU4LjUgNDcxLjg1OSA0NjIuNzM0IDQ3NC4yOTcgNDY3LjEwOSA0NzYuNDIyVjQ4OC4wMzFDNDY3LjEwOSA0OTguMjM0IDQ3NC4zMjggNTA3LjAzMSA0ODMuODEyIDUwOC44NTlDNDkzLjE4OCA1MTAuOTUzIDUwMi43NjYgNTEyIDUxMi4yMzQgNTEyQzUyMS42MDkgNTEyIDUzMC44NzUgNTEwLjk4NCA1MzkuNjg4IDUwOC45NTNDNTQ5LjY1NiA1MDcuMDE2IDU1Ni44OTEgNDk4LjIxOSA1NTYuODkxIDQ4OC4wMzFWNDc2LjQzOEM1NjEuMjY2IDQ3NC4zMTMgNTY1LjQ4NCA0NzEuODc1IDU2OS41MzEgNDY5LjE0MUw1NzkuMjE5IDQ3NC43MzRDNTg4LjAzMSA0ODAuMDE2IDU5OS4zMjggNDc4LjMxMyA2MDUuOTY5IDQ3MC44NzVDNjE4Ljc5NyA0NTcgNjI4LjU2MyA0NDAuMTI1IDYzNC4yOTcgNDIxLjg5MUM2MzcuMjAzIDQxMi4xNzIgNjMyLjg3NSA0MDEuNjU2IDYyNC41MTYgMzk3LjE1NlpNNTgxLjU2MiAzNzEuMTU2QzU4My4xNDEgMzc5LjU2MiA1ODMuMTQxIDM4OC40MzggNTgxLjU2MiAzOTYuODQ0TDU3OS40NjkgNDA3Ljk1M0w2MDAuODQ0IDQyMC4zOTFDNTk3LjU0NyA0MjguMzQ0IDU5My4xNzIgNDM1Ljg3NSA1ODcuODU5IDQ0Mi43NjZMNTY2LjU3OCA0MzAuNDY5TDU1Ny45NjkgNDM3Ljc4MUM1NTEuMjgxIDQ0My40NjkgNTQzLjc1IDQ0Ny44MjggNTM1LjU3OCA0NTAuNzAzTDUyNC44OTEgNDU0LjQ2OVY0NzkuMTQxQzUxNi40NTMgNDgwLjIzNCA1MDcuNzk3IDQ4MC4yMzQgNDk5LjEwOSA0NzkuMTA5VjQ1NC40ODRMNDg4LjQzNyA0NTAuNzAzQzQ4MC4yNjYgNDQ3LjgyOCA0NzIuNzE5IDQ0My40NjkgNDY2LjA0NyA0MzcuNzgxTDQ1Ny40NjkgNDMwLjQ4NEw0MzYuMDk0IDQ0Mi43ODFDNDMwLjczNCA0MzUuODQ0IDQyNi4zNDQgNDI4LjI2NiA0MjMuMTI1IDQyMC4zNzVMNDQ0LjM0NCA0MDhMNDQyLjM3NSAzOTdDNDQwLjg1OSAzODguNSA0NDAuODU5IDM3OS41IDQ0Mi4zNzUgMzcxTDQ0NC4zNDQgMzYwTDQyMy4xMjUgMzQ3LjYyNUM0MjYuMzc1IDMzOS42NDEgNDMwLjc2NiAzMzIuMDQ3IDQzNi4wNjMgMzI1LjIwM0w0NTcuNDY5IDMzNy41MTZMNDY2LjA0NyAzMzAuMjE5QzQ3Mi43MTkgMzI0LjUzMSA0ODAuMjY2IDMyMC4xNzIgNDg4LjQzOCAzMTcuMjk3TDQ5OS4xMDkgMzEzLjUxNlYyODguODU5QzUwNy41MTYgMjg3LjcwMyA1MTYuMTcyIDI4Ny43MTkgNTI0Ljg5MSAyODguOTA2VjMxMy41MzFMNTM1LjU3OCAzMTcuMjk3QzU0My43NSAzMjAuMTcyIDU1MS4yODEgMzI0LjUzMSA1NTcuOTY5IDMzMC4yMTlMNTY2LjU3OCAzMzcuNTMxTDU4Ny44NzUgMzI1LjIzNEM1OTMuMTcyIDMzMi4wOTQgNTk3LjU2MyAzMzkuNjU2IDYwMC44NDQgMzQ3LjU5NEw1NzkuNDY5IDM2MC4wNDdMNTgxLjU2MiAzNzEuMTU2Wk0xMjggMTYwQzE3Mi4xODQgMTYwIDIwOCAxMjQuMTgyIDIwOCA4MFMxNzIuMTg0IDAgMTI4IDBDODMuODIgMCA0OCAzNS44MTggNDggODBTODMuODIgMTYwIDEyOCAxNjBaTTEyOCAzMkMxNTQuNDY3IDMyIDE3NiA1My41MzMgMTc2IDgwUzE1NC40NjcgMTI4IDEyOCAxMjhTODAgMTA2LjQ2NyA4MCA4MFMxMDEuNTMzIDMyIDEyOCAzMlpNMzg0IDQ4MEgxNjAuMTVDMTYzLjE3MiA0MjYuNTkyIDIxMS4zMzggMzg0IDI3MC4xMTMgMzg0SDMzNkMzNDQuODM2IDM4NCAzNTIgMzc2LjgzNiAzNTIgMzY4QzM1MiAzNTkuMTYyIDM0NC44MzYgMzUyIDMzNiAzNTJIMjcwLjExM0MxOTEuNjMxIDM1MiAxMjggNDExLjY5MyAxMjggNDg1LjMzMkMxMjggNTAwLjA1OSAxNDAuNzI3IDUxMiAxNTYuNDIyIDUxMkgzODRDMzkyLjgzNiA1MTIgNDAwIDUwNC44MzYgNDAwIDQ5NkM0MDAgNDg3LjE2MiAzOTIuODM2IDQ4MCAzODQgNDgwWk01MTIgMzM2QzQ4NS41MzEgMzM2IDQ2NCAzNTcuNTMxIDQ2NCAzODRTNDg1LjUzMSA0MzIgNTEyIDQzMlM1NjAgNDEwLjQ2OSA1NjAgMzg0UzUzOC40NjkgMzM2IDUxMiAzMzZaTTUxMiA0MDBDNTAzLjE3MiA0MDAgNDk2IDM5Mi44MjggNDk2IDM4NFM1MDMuMTcyIDM2OCA1MTIgMzY4UzUyOCAzNzUuMTcyIDUyOCAzODRTNTIwLjgyOCA0MDAgNTEyIDQwMFpNMTYyLjc1IDIyOC4zNDRDMTcwLjY4OCAyMzIuMTQxIDE4MC4yODEgMjI4LjcxOSAxODQuMDYyIDIyMC43NUMxODcuODU5IDIxMi43ODEgMTg0LjQ1MyAyMDMuMjM0IDE3Ni40NjkgMTk5LjQzOEMxNjYuMDc4IDE5NC41IDE1NS4xNTYgMTkyIDE0NCAxOTJINzguOTIyQzM1LjQwNiAxOTIgMCAyMjkuMDk0IDAgMjc0LjY3MlYyODhDMCAyOTYuODQ0IDcuMTU2IDMwNCAxNiAzMDRTMzIgMjk2Ljg0NCAzMiAyODhWMjc0LjY3MkMzMiAyNDYuNzM0IDUzLjA0NyAyMjQgNzguOTIyIDIyNEgxNDRDMTUwLjM3NSAyMjQgMTU2LjY3MiAyMjUuNDY5IDE2Mi43NSAyMjguMzQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UsersGear(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M319.859 320C377.273 320 423.814 273.436 423.814 216C423.814 158.562 377.273 112 319.859 112C262.451 112 215.904 158.562 215.904 216C215.904 273.436 262.451 320 319.859 320ZM319.859 144C359.535 144 391.814 176.299 391.814 216S359.535 288 319.859 288S247.904 255.701 247.904 216S280.184 144 319.859 144ZM496 192C485.201 192 474.621 194.342 464.529 198.971C456.789 202.521 452.395 211.482 455.387 219.455C458.723 228.338 468.895 232.34 477.25 228.344C483.328 225.469 489.625 224 496 224H561.078C577.727 224 592.316 233.439 600.631 247.602C603.6 252.66 608.789 256 614.654 256C627.072 256 634.584 242.521 628.35 231.783C614.523 207.963 589.588 192 561.078 192H496ZM512 160C556.184 160 592 124.182 592 80S556.184 0 512 0C467.82 0 432 35.818 432 80S467.82 160 512 160ZM512 32C538.467 32 560 53.533 560 80S538.467 128 512 128S464 106.467 464 80S485.533 32 512 32ZM624.516 397.156L614.5 391.328C614.859 386.438 614.859 381.547 614.5 376.672L624.031 371.109C632.875 366.344 637.203 355.828 634.234 345.891C628.563 327.875 618.797 311 606.156 297.344C599.453 289.828 588.234 288.078 579.516 293.094L569.531 298.859C565.484 296.125 561.266 293.688 556.891 291.563V279.969C556.891 269.781 549.656 260.984 540.125 259.141C521.516 254.953 502.016 254.984 484.25 259.047C474.328 260.969 467.109 269.766 467.109 279.969V291.578C462.734 293.703 458.5 296.141 454.453 298.875L444.703 293.266C436.156 288.109 424.969 289.687 417.953 297.125C405.031 311.109 395.281 328 389.719 346.109C386.812 355.828 390.891 366.047 399.406 370.844L409.469 376.703C409.141 381.563 409.141 386.438 409.469 391.297L399.891 396.891C390.937 401.703 386.766 411.984 389.75 422.016C395.234 439.828 404.969 456.719 418.062 470.984C424.922 478.266 435.797 479.891 444.375 474.922L454.469 469.125C458.5 471.859 462.734 474.297 467.109 476.422V488.031C467.109 498.234 474.328 507.031 483.812 508.859C493.188 510.953 502.766 512 512.234 512C521.609 512 530.875 510.984 539.688 508.953C549.656 507.016 556.891 498.219 556.891 488.031V476.438C561.266 474.313 565.484 471.875 569.531 469.141L579.219 474.734C588.031 480.016 599.328 478.313 605.969 470.875C618.797 457 628.563 440.125 634.297 421.891C637.203 412.172 632.875 401.656 624.516 397.156ZM581.562 371.156C583.141 379.562 583.141 388.438 581.562 396.844L579.469 407.953L600.844 420.391C597.547 428.344 593.172 435.875 587.859 442.766L566.578 430.469L557.969 437.781C551.281 443.469 543.75 447.828 535.578 450.703L524.891 454.469V479.141C516.453 480.234 507.797 480.234 499.109 479.109V454.484L488.437 450.703C480.266 447.828 472.719 443.469 466.047 437.781L457.469 430.484L436.094 442.781C430.734 435.844 426.344 428.266 423.125 420.375L444.344 408L442.375 397C440.859 388.5 440.859 379.5 442.375 371L444.344 360L423.125 347.625C426.375 339.641 430.766 332.047 436.063 325.203L457.469 337.516L466.047 330.219C472.719 324.531 480.266 320.172 488.438 317.297L499.109 313.516V288.859C507.516 287.703 516.172 287.719 524.891 288.906V313.531L535.578 317.297C543.75 320.172 551.281 324.531 557.969 330.219L566.578 337.531L587.875 325.234C593.172 332.094 597.563 339.656 600.844 347.594L579.469 360.047L581.562 371.156ZM128 160C172.184 160 208 124.182 208 80S172.184 0 128 0C83.82 0 48 35.818 48 80S83.82 160 128 160ZM128 32C154.467 32 176 53.533 176 80S154.467 128 128 128S80 106.467 80 80S101.533 32 128 32ZM384 480H160.15C163.172 426.592 211.338 384 270.113 384H336C344.836 384 352 376.836 352 368C352 359.162 344.836 352 336 352H270.113C191.631 352 128 411.693 128 485.332C128 500.059 140.727 512 156.422 512H384C392.836 512 400 504.836 400 496C400 487.162 392.836 480 384 480ZM512 336C485.531 336 464 357.531 464 384S485.531 432 512 432S560 410.469 560 384S538.469 336 512 336ZM512 400C503.172 400 496 392.828 496 384S503.172 368 512 368S528 375.172 528 384S520.828 400 512 400ZM162.75 228.344C170.688 232.141 180.281 228.719 184.062 220.75C187.859 212.781 184.453 203.234 176.469 199.438C166.078 194.5 155.156 192 144 192H78.922C35.406 192 0 229.094 0 274.672V288C0 296.844 7.156 304 16 304S32 296.844 32 288V274.672C32 246.734 53.047 224 78.922 224H144C150.375 224 156.672 225.469 162.75 228.344Z" />
        </Icon>
    </>
}