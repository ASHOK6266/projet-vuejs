<template>
  <div id="table1"> 
    <table  border='1' width='100%' style='border-collapse: color: #f7f8fa; collapse;'>
      <tr>
        <th>First name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>

      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role }}</td>
        <td>
          <input type="button" @click="selectUser(user)" value="Select">
          <input type="button" @click="deleteUser(user.id)" value="Delete">
        </td>
      </tr>
    </table>
    <br>
    <section class="login py-5 border-top-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-8 align-item-center">
            <div class="border border">
              <h3 class="bg-gray p-4">Register Now</h3>
              <fieldset class="p-4">
                <form >
                    <label>Rôle</label>
                    <select name="role"  v-model="role">
                      <!--  <option v-for="user in users" v-bind:key="user.id" value="user.role">
                            {{user.role}}
                        </option>-->
                        <option value="1">Admin</option>
                        <option value="2">Vendeur </option>
                        <option value="3">Client </option>
                    </select>
                    <br>
                  <label>First Name</label>
                  <input type="text" name="firstName" v-model="firstName" class="border p-3 w-100 my-2">
                  <br>

                  <label>Last Name</label>
                  <input type="text" name="lastName" v-model="lastName" class="border p-3 w-100 my-2">
                  <br>

                  <label>Email</label>
                  <input type="email" name="email" v-model="email" class="border p-3 w-100 my-2">
                  <br>
                  <label>Password</label>
                  <input type="password" name="password" v-model="password" class="border p-3 w-100 my-2">
                  <br>

                  <input v-if="!id" type="button" @click="signup(firstName, lastName, email, password, role)" value="Add">
                  <input v-if="id" type="button" @click="updateUser(id, firstName, lastName, email, role, password)" value="Update">
                  <input type="button" @click="clearForm()" value="Clear">
                </form>
              </fieldset>
            </div>  
          </div>
        </div>   
      </div>
    </section> 
  </div>
    
</template>

<script>
import gql from 'graphql-tag'

  export default {
    name: 'Admin',
      data() {
    return {
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: '3',
    }
  },

    apollo: {
    users: gql`query {
      users {
        id,
        firstName,
        lastName,
        email,
        role,
        password
      }
    }`,
    },

    methods: {
        async signup(firstName, lastName, email, role, password) {
         // Call to the graphql mutation
        let mutation;
        //console.log(values)

        if (this.role === "3") {
          mutation = gql`
            mutation ($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
              signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: USER) {
                token,
                user {
                  password
                }
              }
            }
          `
        } else if (this.role === "1") {
          
          mutation = gql`
            mutation ($firstName: String!, $lastName: String!, $email: String!, $password: String! ) {
              signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: ADMIN) {
                token,
                user {
                  password
                }
              }
            }
          `
        } else if (this.role === "2") {
          
          mutation = gql`
            mutation ($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
              signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: SELLER) {
                token,
                user {
                  password
                }
              }
            }
          `
        }

        await this.$apollo.mutate({
          mutation,
          variables: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
          }
        });
       // console.dir("salut" , values  );
        //location.reload();
      },
        async  updateUser(id,firstName, lastName, email, role, password) {
         // Call to the graphql mutation
        let mutation;
        //console.log(values)

        if (this.role === "3") {
          mutation = gql`
            mutation ($id: ID!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
              updateUser(data:{firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: USER}, where:{id:$id}) {
               
                  password
                
              }
            }
          `
        } else if (this.role === "1") {
          
          mutation = gql`
            mutation ($id: ID!, $firstName: String!, $lastName: String!, $email: String!, $password: String! ) {
              updateUser(data:{firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: ADMIN}, where:{id:$id}) {
                
                  password
                
              }
            }
          `
        } else if (this.role === "2") {
          
          mutation = gql`
            mutation ($id: ID!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
              updateUser(data:{firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: SELLER}, where:{id:$id}) {
                 password 
              }
            }
          `
        }

        await this.$apollo.mutate({
          mutation,
          variables: {
                id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
          }
        });
       // console.dir("salut" , values  );
        //location.reload();
      },
        
   /* updateUser(id, firstName, lastName, email, role, password ) {
      console.log(`Update contact: #${id}`)
      this.$apollo.mutate({
        mutation: gql`mutation updateUser($id: ID!, $firstName: String!, $lastName: String!, $email: String!, $password: String!, $role:Role) {
          updateUser(data:{id: $id, firstName: $firstName, lastName: $lastName, password: $password, email: $email, role:$role})
        }`,
        variables: {
          id: id,
          firstName: firstName,
          lastName: lastName,
          email: email,
          role: role,
          password
        }
      })
      //location.reload();
    },*/

         deleteUser(id) {
      console.log(`Delete user: #${id}`)
      this.$apollo.mutate({
        mutation: gql`mutation deleteUser($id: ID!) {
          deleteUser(where:{id:$id}){id}
        }`,
        variables: {
          id: id,
        }
      })
      location.reload();
    },
    selectUser(user) {
      this.id = user.id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.email = user.email;
      this.password = user.password;
      this.role = user.role;
      console.log(user.role)
    },
    clearForm() {
      this.id = null;
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.password = '';
      this.role = '';
    }


      
        //console.dir("salut" , users  );
      },
       /* handleSubmit(e) {
         if(this.textarea) return console.log("salut!!!!!");
         e.preventDefault();
          console.log("salut" + e);
          this.onSubmit()
        }, */
        
    
  };
</script>


