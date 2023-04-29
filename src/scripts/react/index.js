import "../../styles/react/";
import React from "react";
import ReactDOM from "react-dom/client";

const renderDOM = document.getElementById("root");
const renderRoot = ReactDOM.createRoot(renderDOM);

const Box = ({ name, ...props }) => {
	const BoxName = name;
	return <BoxName {...props} />;
};

renderRoot.render(
	<div className="container-xxl">
		<div className="row gy-5 g-xl-8">
			<div className="col-xl-4">
				<div className="card card-flush h-xl-100">
					<div className="card-header pt-7">
						<h3 className="card-title align-items-start flex-column">
							<span className="card-label fw-bolder text-gray-800">To do</span>
							<span className="text-gray-400 mt-1 fw-bold fs-6">
								list to do categories
							</span>
						</h3>
					</div>

					<div className="card-body d-flex align-items-end">
						<div className="w-100">
							{/*  */}
							<div className="d-flex align-items-center">
								<div className="d-flex">
									<span className="bullet bullet-vertical h-40px bg-success"></span>
									<div className="form-check form-check-custom form-check-solid mx-5">
										<input className="form-check-input" type="checkbox" value="" />
									</div>
								</div>

								<div className="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">
									<div className="me-5">
										<a
											href="#"
											className="text-gray-800 fw-bolder text-hover-primary fs-6"
										>
											Social Networks
										</a>
										<span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">
											All Social Channels
										</span>
									</div>

									<div className="d-flex align-items-center">
										<span className="text-gray-800 fw-bolder fs-4 me-3">1</span>

										<button
											type="button"
											className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
											data-kt-menu-trigger="click"
											data-kt-menu-placement="bottom-end"
										>
											<span className="svg-icon svg-icon-3">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24px"
													height="24px"
													viewBox="0 0 24 24"
												>
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<rect
															x="5"
															y="5"
															width="5"
															height="5"
															rx="1"
															fill="#000000"
														></rect>
														<rect
															x="14"
															y="5"
															width="5"
															height="5"
															rx="1"
															fill="#000000"
															opacity="0.3"
														></rect>
														<rect
															x="5"
															y="14"
															width="5"
															height="5"
															rx="1"
															fill="#000000"
															opacity="0.3"
														></rect>
														<rect
															x="14"
															y="14"
															width="5"
															height="5"
															rx="1"
															fill="#000000"
															opacity="0.3"
														></rect>
													</g>
												</svg>
											</span>
										</button>

										<a
											href="#"
											className="btn btn-icon btn-hover-light-primary draggable-handle"
										>
											<span class="svg-icon svg-icon-2x">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
												>
													<path
														d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
														fill="black"
													></path>
													<path
														opacity="0.3"
														d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
														fill="black"
													></path>
												</svg>
											</span>
										</a>
									</div>
								</div>
							</div>

							<div className="separator separator-dashed my-3"></div>
							{/*  */}
							{/*  */}
							<div className="d-flex align-items-center">
								<div className="d-flex">
									<span className="bullet bullet-vertical h-40px bg-success"></span>
									<div className="form-check form-check-custom form-check-solid mx-5">
										<input className="form-check-input" type="checkbox" value="" />
									</div>
								</div>

								<div className="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">
									<div className="me-5">
										<a
											href="#"
											className="text-gray-800 fw-bolder text-hover-primary fs-6"
										>
											Social Networks
										</a>
										<span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">
											All Social Channels
										</span>
									</div>

									<div className="d-flex align-items-center">
										<span className="text-gray-800 fw-bolder fs-4 me-3">1</span>
										<button
											type="button"
											className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto"
											data-kt-menu-trigger="click"
											data-kt-menu-placement="bottom-end"
										>
											<span className="svg-icon svg-icon-3">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24px"
													height="24px"
													viewBox="0 0 24 24"
												>
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<rect
															x="5"
															y="5"
															width="5"
															height="5"
															rx="1"
															fill="#000000"
														></rect>
														<rect
															x="14"
															y="5"
															width="5"
															height="5"
															rx="1"
															fill="#000000"
															opacity="0.3"
														></rect>
														<rect
															x="5"
															y="14"
															width="5"
															height="5"
															rx="1"
															fill="#000000"
															opacity="0.3"
														></rect>
														<rect
															x="14"
															y="14"
															width="5"
															height="5"
															rx="1"
															fill="#000000"
															opacity="0.3"
														></rect>
													</g>
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>

							<div className="separator separator-dashed my-3"></div>
							{/*  */}
							{/*  */}
							<div className="d-flex align-items-center">
								<div className="d-flex">
									<span className="bullet bullet-vertical h-40px bg-success"></span>
									<div className="form-check form-check-custom form-check-solid mx-5">
										<input className="form-check-input" type="checkbox" value="" />
									</div>
								</div>

								<div className="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">
									<div className="me-5">
										<a
											href="#"
											className="text-gray-800 fw-bolder text-hover-primary fs-6"
										>
											Social Networks
										</a>
										<span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">
											All Social Channels
										</span>
									</div>

									<div className="d-flex align-items-center">
										<span className="text-gray-800 fw-bolder fs-4 me-3">1</span>
									</div>
								</div>
							</div>

							<div className="separator separator-dashed my-3"></div>
							{/*  */}
							<div className="d-flex align-items-center">
								<div className="d-flex">
									<span className="bullet bullet-vertical h-40px bg-success"></span>
									<div className="form-check form-check-custom form-check-solid mx-5">
										<input className="form-check-input" type="checkbox" value="" />
									</div>
								</div>

								<div className="d-flex align-items-center flex-stack flex-wrap d-grid gap-1 flex-row-fluid">
									<div className="me-5">
										<a
											href="#"
											className="text-gray-800 fw-bolder text-hover-primary fs-6"
										>
											Social Networks
										</a>
										<span className="text-gray-400 fw-bold fs-7 d-block text-start ps-0">
											All Social Channels
										</span>
									</div>

									<div className="d-flex align-items-center">
										<span className="text-gray-800 fw-bolder fs-4 me-3">1</span>
									</div>
								</div>
							</div>

							<div className="separator separator-dashed my-3"></div>

							<ul className="pagination pagination-outline">
								<li className="page-item previous disabled m-1">
									<a href="#" className="page-link">
										<i className="previous"></i>
									</a>
								</li>
								<li className="page-item m-1">
									<a href="#" className="page-link">
										1
									</a>
								</li>
								<li className="page-item active m-1">
									<a href="#" className="page-link">
										2
									</a>
								</li>
								<li className="page-item m-1">
									<a href="#" className="page-link">
										3
									</a>
								</li>
								<li className="page-item m-1">
									<a href="#" className="page-link">
										4
									</a>
								</li>
								<li className="page-item m-1">
									<a href="#" className="page-link">
										5
									</a>
								</li>
								<li className="page-item m-1">
									<a href="#" className="page-link">
										6
									</a>
								</li>
								<li className="page-item next m-1">
									<a href="#" className="page-link">
										<i className="next"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="col-xl-8">
				<div className="card card-xl-stretch mb-xl-8">
					<div className="card-header border-0">
						<h3 className="card-title fw-bolder text-dark">Cat List</h3>
					</div>

					<div className="card-body pt-2">
						<div className="d-flex align-items-center mb-8">
							<div className="form-check form-check-custom form-check-solid mx-5">
								<input className="form-check-input" type="checkbox" value="" />
							</div>

							<div className="flex-grow-1">
								<a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">
									Task list
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
