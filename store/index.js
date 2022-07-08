const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    console.log("onAuthStateChangedAction - authUser", authUser);

    if (authUser) {
    }

    if (!authUser) {
      state.commit("SET_USER", null);
    } else {
      // const { uid, email } = authUser;
      let userData;
      const data = this.$fire.firestore.collection("user").doc(authUser.uid);
      const res = await data.get();
      if (res) {
        userData = res.data();
      }
      const { uid, email, name, type } = userData;
      // console.log(userData);

      state.commit("SET_USER", {
        uid,
        email,
        name,
        type,
      });
    }
  },

  addPodcast(state, payload) {
    const { name, isLive } = payload;
    state.commit("SET_POD", {
      name: name,
      isLive: isLive,
    });
  },

  addTitle(state, payload) {
    state.commit("SET_TITLE", payload);
  },
  addLive(state, payload) {
    state.commit("SET_LIVE", payload);
  },

  async nuxtServerInit({ dispatch, commit }, { res }) {
    if (res && res.locals && res.locals.user) {
      const {
        allClaims: claims,
        idToken: token,
        ...authUser
      } = res.locals.user;
      console.log("nuxtServerInit - authUser", authUser);
      const { uid, email } = authUser;

      await dispatch("onAuthStateChangedAction", {
        authUser,
        claims,
        token,
      });
    }
  },
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_TITLE(state, title) {
    state.title = title;
  },
  SET_LIVE(state, live) {
    state.live = live;
  },
  SET_POD(state, details) {
    state.podcastDetails.name = details.name;
    state.podcastDetails.isLive = details.isLive;
  },
};

const state = () => ({
  user: null,
  title: "",
  live: null,
});

const getters = {
  getUser(state) {
    return state.user;
  },
  getPodcast(state) {
    return state.podcastDetails;
  },
  getDetails(state) {
    let obj = {
      title: state.title,
      isLive: state.live,
    };
    return obj;
  },
  isLoggedIn(state) {
    let userLoggedIn = false;
    if (state.user) {
      userLoggedIn = true;
    }
    return userLoggedIn;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
