import React from 'react'
import Layout from '../components/Layout'
import './../../styles/content.css'

export default function research() {
  return (<Layout>
    <div><h1>Research Publications</h1>
    <ul>
        <li>
          <h2>Threshold-activated transport stabilizes chaotic populations to steady states
          <br/> <a href='https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0183251'>
            PLOS One 12(8): e0183251 </a>
          </h2>
          <p>We explore Random Scale-Free networks of populations, modelled by chaotic Ricker maps, connected by transport that is triggered when population density in a patch is in excess of a critical threshold level. Our central result is that threshold-activated dispersal leads to stable fixed populations, for a wide range of threshold levels. Further, suppression of chaos is facilitated when the threshold-activated migration is more rapid than the intrinsic population dynamics of a patch. Additionally, networks with large number of nodes open to the environment, readily yield stable steady states. Lastly we demonstrate that in networks with very few open nodes, the degree and betweeness centrality of the node open to the environment has a pronounced influence on control. All qualitative trends are corroborated by quantitative measures, reflecting the efficiency of control, and the width of the steady state window.</p>
        </li>
        <li>
          <h2>Identifying nodal properties that are crucial for the dynamical robustness of multistable networks
          <br/> <a href='https://journals.aps.org/pre/abstract/10.1103/PhysRevE.98.022314'>
            Phys. Rev. E 98 (2018) 022314 </a>
          </h2>
          <p>We investigate the collective dynamics of bistable elements connected in different network topologies and estimate the network response to localized perturbations on different classes of nodes by introducing a variant of the concept of multinode basin stability. We show that perturbations on nodes with high closeness and betweeness centrality drastically reduces the capacity of the system to return to the original state. This effect is most pronounced for a star network, where perturbation of the single hub node can destroy the collective state, while the system manages to recover even when a majority of the peripheral nodes are strongly perturbed. This demonstrates the extreme effect of the centrality of the perturbed node on the stability of the network. Further, we exploit the difference in centrality distributions in random scale-free networks with m=1 and m=2 to probe which property most influences the collective dynamics in heterogeneous networks. Significantly, we find clear evidence that the betweeness centrality of the perturbed node is more crucial for dynamical robustness than closeness centrality or degree of the node. This allows us to decide which nodes to safeguard in order to maintain the collective state of a network against targeted localized attacks.</p>
        </li>
        <li>
          <h2>Are network properties consistent indicators of synchronization?
          <br/> <a href='https://epljournal.edpsciences.org/articles/epl/abs/2017/02/epl18413/epl18413.html'>
            EPL, 117 2 (2017) 20003 </a> <br/>
          </h2>
          <p> We investigate the collective dynamics of bi-stable elements connected in different network topologies, ranging from rings and small-world networks, to random and deterministic scale-free networks. We focus on the correlation between network properties and global stability measures of the synchronized state, in particular the average critical coupling strength yielding transition to synchronization. Further, we estimate the robustness of the synchronized state by finding the minimal fraction of nodes fc that need to be perturbed in order to lose synchronization. Our central result from these synchronization features is the following: while networks properties can provide indicators of synchronization within a network class, they fail to provide consistent indicators across network classes. For instance, the heterogeneity of degree does not consistently impact synchronization, as is evident through the stark difference in the synchronizability of rings vis-à-vis small-world and star networks, all of which have same average degree and deviation around the mean degree in the limit of large networks. Further we demonstrate that clustering coefficient is also not a consistent feature in determining synchronization. This is clear through the similarity of synchronization properties in rings with significantly different clustering coefficients, and the striking difference in synchronization of a star network and a ring having the same clustering coefficient. Even the characteristic path length, which is of paramount importance in determining synchronization, does not provide a one-to-one correspondence with synchronization properties across classes. Namely, synchronization is significantly favoured in networks with low path lengths within a network class. However, the same characteristic path length in different types of networks yields very different and fc.</p>
          <a href='https://github.com/pranayrungta/Synchronization'>Source code here</a>
        </li>
        <li>
          <h2>Random links enhance the sensitivity of networks to heterogeneity
          <br/> <a href='https://epljournal.edpsciences.org/articles/epl/abs/2015/24/epl17580/epl17580.html'> EPL, 112 6 (2015) 60004 </a>
        </h2>
          <p>In this work we investigate the dynamics of networks of bistable elements with varying degrees of randomness in connections, considering both static random links and time-varying random links. We explore how the presence of a few dissimilar elements affects the collective features of this system, and find that a network with random links is hyper-sensitive to heterogeneity. Namely, counter-intuitively, even a small number of distinct elements manages to drastically influence the collective dynamics of the network, with the mean-field swinging to the steady state of the minority elements. We find that the transition in the collective field gets sharper as the fraction of random links increases, for both static and time-varying links. We also demonstrate that networks where the links are switched more frequently, synchronize faster. Lastly, we show that as global bias tends to a critical value, even a single different element manages to drag the entire system to the natural stable state of the minority element. So it is evident that when coupling connections are random, a network with even a very small number of links per node, has the ability to become ultra-sensitive to heterogeneity.</p>
          <a href='https://github.com/pranayrungta/hypersensitivity'>Source code here</a>
        </li>
    </ul>
    </div>
    </Layout>)
  }
