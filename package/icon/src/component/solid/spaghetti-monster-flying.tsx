
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `spaghetti-monster-flying` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spaghetti-monster-flying?s=solid spaghetti-monster-flying}
 * @preview ![spaghetti-monster-flying](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjQuNSAzNDcuNjI1QzU5MS44NzUgMzM1LjEyNSA1NjcuMTI1IDM1MS44NzUgNTQ5LjEyNSAzNjQuMTI1QzUzMi4xMjUgMzc1LjYyNSA1MjUuODc1IDM3OC41IDUxNy43NSAzNzUuNUM1MDkuNjI1IDM3Mi4zNzUgNTA2Ljg3NSAzNjYuMTI1IDUwMS44NzUgMzQ2LjEyNUM0OTguNSAzMzMgNDk0LjM3NSAzMTYuNzUgNDgzLjg3NSAzMDMuNUM0ODYuMTI1IDMwMC41IDQ4OC4zNzUgMjk3LjYyNSA0OTAuMjUgMjk0Ljg3NUM1MDAuNSAzMDQuNSA1MTMuNzUgMzEyIDUzMiAzMTJDNTY2IDMxMiA1ODIuODc1IDI4Ni4yNSA1OTQgMjY5LjEyNUM2MDQuNjI1IDI1MyA2MDkgMjQ4IDYxNiAyNDhDNjI5LjI1IDI0OCA2NDAgMjM3LjI1IDY0MCAyMjRTNjI5LjI1IDIwMCA2MTYgMjAwQzU4MiAyMDAgNTY1LjEyNSAyMjUuNzUgNTU0IDI0Mi44NzVDNTQzLjM3NSAyNTkgNTM5IDI2NCA1MzIgMjY0QzUxNC43NSAyNjQgNDk0LjUgMjAyLjYyNSA0MzQuNzUgMTYyLjEyNUw0NTIgMTI3LjYyNUM0ODUuMzc1IDEyNS41IDUxMiA5OC4wMDEgNTEyIDY0QzUxMiAyOC42MjUgNDgzLjM3NSAwIDQ0OCAwUzM4NCAyOC42MjUgMzg0IDY0QzM4NCA3NyAzODggODkuMTI1IDM5NC42MjUgOTkuMjVMMzc2LjUgMTM1LjVDMzU5LjUgMTMwLjg3NSAzNDAuODc1IDEyOCAzMjAgMTI4UzI4MC41IDEzMC44NzUgMjYzLjUgMTM1LjVMMjQ1LjM3NSA5OS4yNUMyNTIgODkuMTI1IDI1NiA3NyAyNTYgNjRDMjU2IDI4LjYyNSAyMjcuMzc1IDAgMTkyIDBTMTI4IDI4LjYyNSAxMjggNjRDMTI4IDk4LjAwMSAxNTQuNSAxMjUuNSAxODggMTI3LjYyNUwyMDUuMjUgMTYyLjEyNUMxNDUuNjI1IDIwMi41IDEyNS4xMjUgMjY0IDEwOCAyNjRDMTAxIDI2NCA5Ni42MjUgMjU5IDg1Ljk5OSAyNDIuODc1Qzc0Ljg3NSAyMjUuNzUgNTcuOTk5IDIwMCAyNCAyMDBDMTAuNzUgMjAwIDAgMjEwLjc1IDAgMjI0UzEwLjc1IDI0OCAyNCAyNDhDMzEgMjQ4IDM1LjM3NSAyNTMgNDUuOTk5IDI2OS4xMjVDNTcuMTI1IDI4Ni4yNSA3My45OTkgMzEyIDEwOCAzMTJDMTI2LjI1IDMxMiAxMzkuNSAzMDQuNSAxNDkuNzUgMjk0Ljg3NUMxNTEuNjI1IDI5Ny42MjUgMTUzLjg3NSAzMDAuNSAxNTYuMTI1IDMwMy41QzE0NS42MjUgMzE2Ljc1IDE0MS41IDMzMyAxMzguMTI1IDM0Ni4xMjVDMTMzLjEyNSAzNjYuMTI1IDEzMC4zNzUgMzcyLjM3NSAxMjIuMjUgMzc1LjVDMTE0LjEyNSAzNzguNSAxMDcuODc1IDM3NS42MjUgOTAuODc1IDM2NC4xMjVDNzIuNzUgMzUxLjg3NSA0OC4xMjUgMzM1LjI1IDE1LjUgMzQ3LjYyNUMzLjEyNSAzNTIuMzc1IC0zLjEyNSAzNjYuMjUgMS42MjUgMzc4LjYyNUM2LjI1IDM5MSAyMC4yNSAzOTcuMjUgMzIuNSAzOTIuNUM0MC43NSAzODkuNSA0Ni44NzUgMzkyLjM3NSA2NCA0MDMuODc1Qzc3LjUgNDEzIDk0Ljc1IDQyNC43NSAxMTYuMzc1IDQyNC43NUMxMjMuNSA0MjQuNzUgMTMxLjI1IDQyMy41IDEzOS4zNzUgNDIwLjM3NUMxNzIgNDA3Ljg3NSAxNzkuMzc1IDM3OSAxODQuNjI1IDM1Ny44NzVDMTg2Ljg3NSAzNDkuMTI1IDE4OC42MjUgMzQzLjM3NSAxOTAuNjI1IDMzOUMyMDcuMjUgMzUyLjYyNSAyMjcuNjI1IDM2NC44NzUgMjUyLjI1IDM3My4yNUMyNDIuMjUgNDEwLjI1IDIyMC4xMjUgNDY0IDE5MiA0NjRDMTc4Ljc1IDQ2NCAxNjggNDc0Ljc1IDE2OCA0ODhTMTc4Ljc1IDUxMiAxOTIgNTEyQzI1OC43NSA1MTIgMjg5IDQyMy4zNzUgMjk5LjM3NSAzODIuODc1QzMwNi4xMjUgMzgzLjUgMzEyLjg3NSAzODQgMzIwIDM4NFMzMzMuODc1IDM4My41IDM0MC42MjUgMzgyLjg3NUMzNTEgNDIzLjM3NSAzODEuMjUgNTEyIDQ0OCA1MTJDNDYxLjI1IDUxMiA0NzIgNTAxLjI1IDQ3MiA0ODhTNDYxLjI1IDQ2NCA0NDggNDY0QzQyMCA0NjQgMzk3Ljc1IDQxMC4yNSAzODcuNzUgMzczLjI1QzQxMi41IDM2NC44NzUgNDMyLjc1IDM1Mi42MjUgNDQ5LjM3NSAzMzlDNDUxLjM3NSAzNDMuMzc1IDQ1My4xMjUgMzQ5LjEyNSA0NTUuMzc1IDM1Ny44NzVDNDYwLjc1IDM3OSA0NjggNDA3Ljg3NSA1MDAuNjI1IDQyMC4zNzVDNTA4Ljg3NSA0MjMuNSA1MTYuNSA0MjQuNzUgNTIzLjYyNSA0MjQuNzVDNTQ1LjI1IDQyNC43NSA1NjIuNSA0MTMgNTc2LjEyNSA0MDMuODc1QzU5My4xMjUgMzkyLjM3NSA1OTkuMzc1IDM4OS41IDYwNy41IDM5Mi41QzYxOS44NzUgMzk3LjI1IDYzMy43NSAzOTEgNjM4LjM3NSAzNzguNjI1QzY0My4xMjUgMzY2LjI1IDYzNyAzNTIuMzc1IDYyNC41IDM0Ny42MjVaTTE5MiA4MEMxODMuMTI1IDgwIDE3NiA3Mi44NzUgMTc2IDY0UzE4My4xMjUgNDggMTkyIDQ4UzIwOCA1NS4xMjUgMjA4IDY0UzIwMC44NzUgODAgMTkyIDgwWk00NDggNDhDNDU2Ljg3NSA0OCA0NjQgNTUuMTI1IDQ2NCA2NFM0NTYuODc1IDgwIDQ0OCA4MFM0MzIgNzIuODc1IDQzMiA2NFM0MzkuMTI1IDQ4IDQ0OCA0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SpaghettiMonsterFlying(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M624.5 347.625C591.875 335.125 567.125 351.875 549.125 364.125C532.125 375.625 525.875 378.5 517.75 375.5C509.625 372.375 506.875 366.125 501.875 346.125C498.5 333 494.375 316.75 483.875 303.5C486.125 300.5 488.375 297.625 490.25 294.875C500.5 304.5 513.75 312 532 312C566 312 582.875 286.25 594 269.125C604.625 253 609 248 616 248C629.25 248 640 237.25 640 224S629.25 200 616 200C582 200 565.125 225.75 554 242.875C543.375 259 539 264 532 264C514.75 264 494.5 202.625 434.75 162.125L452 127.625C485.375 125.5 512 98.001 512 64C512 28.625 483.375 0 448 0S384 28.625 384 64C384 77 388 89.125 394.625 99.25L376.5 135.5C359.5 130.875 340.875 128 320 128S280.5 130.875 263.5 135.5L245.375 99.25C252 89.125 256 77 256 64C256 28.625 227.375 0 192 0S128 28.625 128 64C128 98.001 154.5 125.5 188 127.625L205.25 162.125C145.625 202.5 125.125 264 108 264C101 264 96.625 259 85.999 242.875C74.875 225.75 57.999 200 24 200C10.75 200 0 210.75 0 224S10.75 248 24 248C31 248 35.375 253 45.999 269.125C57.125 286.25 73.999 312 108 312C126.25 312 139.5 304.5 149.75 294.875C151.625 297.625 153.875 300.5 156.125 303.5C145.625 316.75 141.5 333 138.125 346.125C133.125 366.125 130.375 372.375 122.25 375.5C114.125 378.5 107.875 375.625 90.875 364.125C72.75 351.875 48.125 335.25 15.5 347.625C3.125 352.375 -3.125 366.25 1.625 378.625C6.25 391 20.25 397.25 32.5 392.5C40.75 389.5 46.875 392.375 64 403.875C77.5 413 94.75 424.75 116.375 424.75C123.5 424.75 131.25 423.5 139.375 420.375C172 407.875 179.375 379 184.625 357.875C186.875 349.125 188.625 343.375 190.625 339C207.25 352.625 227.625 364.875 252.25 373.25C242.25 410.25 220.125 464 192 464C178.75 464 168 474.75 168 488S178.75 512 192 512C258.75 512 289 423.375 299.375 382.875C306.125 383.5 312.875 384 320 384S333.875 383.5 340.625 382.875C351 423.375 381.25 512 448 512C461.25 512 472 501.25 472 488S461.25 464 448 464C420 464 397.75 410.25 387.75 373.25C412.5 364.875 432.75 352.625 449.375 339C451.375 343.375 453.125 349.125 455.375 357.875C460.75 379 468 407.875 500.625 420.375C508.875 423.5 516.5 424.75 523.625 424.75C545.25 424.75 562.5 413 576.125 403.875C593.125 392.375 599.375 389.5 607.5 392.5C619.875 397.25 633.75 391 638.375 378.625C643.125 366.25 637 352.375 624.5 347.625ZM192 80C183.125 80 176 72.875 176 64S183.125 48 192 48S208 55.125 208 64S200.875 80 192 80ZM448 48C456.875 48 464 55.125 464 64S456.875 80 448 80S432 72.875 432 64S439.125 48 448 48Z" />
        </Icon>
    </>
}