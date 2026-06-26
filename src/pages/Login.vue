<template>
    <div class="row">
        <div class="col-lg-4 col-md-2 col-sm-14 col-14 h-100 side-bar-login">
            <img src="../assets/images/image-login.jpg" id="image-sidebar-login" alt="">
        </div>

        <div class="col-lg-8 bundle-form-login">
            <div class="row row-form-login">
                <div class="col-6">
                    <img src="../assets/images/LogoOption3.png" alt="" height="80px">
                </div>
                <div class="col-6 my-auto">
                    <p>Belum memiliki akun? <span>Daftar</span></p>
                </div>
            </div>
            <h4 class="title-form-login">Selamat Datang</h4>
            <p class="desc-form-login">Masukan pasangan Email dan Password Anda.</p>
            <div class="wrapper bg-white form-login">
                <form>
                    <div class="form-group">
                        <div class="input-field">
                            <span class="far fa-user p-2"></span>
                            <input type="text" placeholder="Username or Email Address" required class="form-control py-2">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-field">
                            <span class="fas fa-lock p-2"></span>
                            <div class="password-wrap">
                                <input type="password" placeholder="Enter your Password" required class="form-control py-2">
                                <button class="btn text-muted" type="submit" id="show-password">
                                    <font-awesome-icon icon="fa-solid fa-eye"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    
                    <div class="d-flex align-items-start">
                        <div class="remember"> <label class="option text-muted"> Remember me <input type="radio" name="radio"> <span class="checkmark"></span> </label> </div>
                        <div class="ml-auto"> <a href="#" id="forgot">Forgot Password?</a> </div>
                    </div> <button class="btn btn-block text-center my-3">Log in</button>
                    <div class="text-center pt-3 text-muted">Not a member? <a href="#">Sign up</a></div>
                </form>
            
                

            </div>
        </div>
    </div>
</template>
<script setup>

</script>